"use client";

import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import { useRouter } from "next/navigation";
import { isValidPhoneNumber } from "libphonenumber-js";
import { X } from "lucide-react";

import Input from "@/components/ui/Input";
import SelectField from "@/components/ui/SelectField";
import { Button } from "@/components/ui/Button";
import { getAssetPath } from "@/lib/utils";

import PhoneField from "./PhoneField";

/* =========================================================
   TYPES
========================================================= */

export type FormCourseOption = {
  value: string;
  label: string;
  disabled?: boolean;
  hidden?: boolean;
};

type FormWrapperProps = {
  title?: string;
  subtitle?: string;

  onClose?: () => void;
  onSuccess?: () => void;

  /*
   * Form header hide karne ke liye.
   */
  hideHeader?: boolean;

  /*
   * Page-wise course options.
   *
   * FormCourseOption[] aur string[] dono supported hain.
   */
  courseOptions?: FormCourseOption[] | string[];

  /*
   * Single-course landing page ke liye.
   */
  defaultCourse?: string;
  hideCourseField?: boolean;

  /*
   * Lead information.
   */
  formNameOverride?: string;
  sourceOverride?: string;

  /*
   * Optional UTM fallback values.
   */
  utmSourceFallback?: string;
  utmMediumFallback?: string;

  /*
   * Additional form configuration.
   */
  showPhoneCallLink?: boolean;
  submitButtonText?: string;
  submitButtonClassName?: string;
  redirectUrl?: string;

  /*
   * Brochure flow ko explicitly control karne ke liye.
   */
  isBrochureForm?: boolean;
  brochureUrl?: string;
};

type StoredUtmData = {
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_term?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
};

/* =========================================================
   STATE OPTIONS
========================================================= */

const STATE_OPTIONS = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

/* =========================================================
   DEFAULT COURSE OPTIONS
========================================================= */

const DEFAULT_COURSE_OPTIONS: FormCourseOption[] = [
  /* ---------------------------------------------------------
     DOCTORATE
  --------------------------------------------------------- */

  {
    value: "__DOCTORATE_HEADING__",
    label: "Doctorate ━━",
    disabled: true,
  },

  {
    value: "DBA",
    label: "DBA",
  },

  {
    value: "MBA_DBA",
    label: "MBA + DBA",
  },

  /* ---------------------------------------------------------
     MASTER
  --------------------------------------------------------- */

  {
    value: "__MASTER_HEADING__",
    label: "Master ━━",
    disabled: true,
  },

  {
    value: "MBA",
    label: "MBA",
  },

  {
    value: "MSC_DATA_SCIENCE",
    label: "M.Sc. Data Science",
  },

  {
    value: "MSC_MACHINE_LEARNING_AI",
    label: "M.Sc. Machine Learning & AI",
  },

  {
    value: "EXECUTIVE_DIPLOMA_MACHINE_LEARNING_AI",
    label: "Executive Diploma in Machine Learning & AI",
  },

  /* ---------------------------------------------------------
     CERTIFICATIONS
  --------------------------------------------------------- */

  {
    value: "__CERTIFICATION_HEADING__",
    label: "Certification ━━",
    disabled: true,
  },

  {
    value: "PROFESSIONAL_CERTIFICATE_HR_MANAGEMENT_ANALYTICS",
    label: "Professional Certificate Programme in HR Management and Analytics",
  },

  {
    value: "PROFESSIONAL_CERTIFICATE_DATA_SCIENCE_GENERATIVE_AI",
    label:
      "Professional Certificate Programme in Data Science with Generative AI",
  },

  {
    value: "EXECUTIVE_POST_GRADUATE_CERTIFICATE_DATA_SCIENCE_AI",
    label: "Executive Post Graduate Certificate Programme in Data Science & AI",
  },

  {
    value: "EXECUTIVE_POST_GRADUATE_CERTIFICATE_GENERATIVE_AGENTIC_AI",
    label: "Executive Post Graduate Certificate in Generative AI & Agentic AI",
  },

  {
    value: "ADVANCED_CERTIFICATE_DIGITAL_MARKETING_COMMUNICATION",
    label: "Advanced Certificate in Digital Marketing & Communication",
  },

  {
    value: "ADVANCED_CERTIFICATE_DIGITAL_BRAND_COMMUNICATION_STRATEGY",
    label: "Advanced Certificate in Digital Brand Communication Strategy",
  },

  /* ---------------------------------------------------------
     EXECUTIVE PROGRAMS
  --------------------------------------------------------- */

  {
    value: "__EXECUTIVE_PROGRAMS_HEADING__",
    label: "Executive Programs ━━",
    disabled: true,
  },

  {
    value: "EXECUTIVE_PROGRAMME_GENERATIVE_AI_FOR_LEADERS",
    label: "Executive Programme in Generative AI for Leaders",
  },

  {
    value: "EXECUTIVE_POST_GRADUATE_PROGRAMME_APPLIED_AI_AGENTIC_AI",
    label: "Executive Post Graduate Programme in Applied AI and Agentic AI",
  },

  {
    value: "CHIEF_TECHNOLOGY_OFFICER_AI_LEADERSHIP_PROGRAMME",
    label: "Chief Technology Officer & AI Leadership Programme",
  },
];

/* =========================================================
   NORMALIZE COURSE OPTIONS
========================================================= */

function normalizeCourseOptions(
  options?: FormCourseOption[] | string[],
): FormCourseOption[] {
  if (!options || options.length === 0) {
    return DEFAULT_COURSE_OPTIONS;
  }

  return options.map((option) => {
    if (typeof option === "string") {
      return {
        value: option,
        label: option,
      };
    }

    return option;
  });
}

/* =========================================================
   FORM COMPONENT
========================================================= */

export default function FormWrapper({
  title,
  subtitle,

  onClose,
  onSuccess,

  hideHeader = false,

  courseOptions,
  defaultCourse = "",
  hideCourseField = false,

  formNameOverride,
  sourceOverride,

  utmSourceFallback,
  utmMediumFallback,

  showPhoneCallLink = false,
  submitButtonText = "Submit",
  submitButtonClassName = "",
  redirectUrl = "/thank-you",

  isBrochureForm = false,
  brochureUrl = "",
}: FormWrapperProps) {
  const router = useRouter();

  /* =======================================================
     FORM STATE
  ======================================================== */

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");

  const [state, setState] = useState("");

  const [course, setCourse] = useState(defaultCourse);

  const [phoneError, setPhoneError] = useState("");

  const [formError, setFormError] = useState("");

  const [loading, setLoading] = useState(false);

  const [closing, setClosing] = useState(false);

  /* =======================================================
     FINAL COURSE OPTIONS
  ======================================================== */

  const finalCourseOptions = useMemo(() => {
    return normalizeCourseOptions(courseOptions);
  }, [courseOptions]);

  /* =======================================================
     UPDATE DEFAULT COURSE
  ======================================================== */

  useEffect(() => {
    setCourse(defaultCourse);
  }, [defaultCourse]);

  /* =======================================================
     SAVE CURRENT URL UTM PARAMETERS
  ======================================================== */

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const params = new URLSearchParams(window.location.search);

    const existingStoredData = localStorage.getItem("utm_data");

    let existingUtmData: StoredUtmData = {};

    try {
      existingUtmData = existingStoredData
        ? JSON.parse(existingStoredData)
        : {};
    } catch {
      existingUtmData = {};
    }

    const utmData: StoredUtmData = {
      utm_source:
        params.get("utm_source") || existingUtmData.utm_source || null,

      utm_medium:
        params.get("utm_medium") || existingUtmData.utm_medium || null,

      utm_term: params.get("utm_term") || existingUtmData.utm_term || null,

      utm_campaign:
        params.get("utm_campaign") || existingUtmData.utm_campaign || null,

      utm_content:
        params.get("utm_content") || existingUtmData.utm_content || null,
    };

    localStorage.setItem("utm_data", JSON.stringify(utmData));
  }, []);

  /* =======================================================
     GET UTM PARAMETERS
  ======================================================== */

  const getUTMParams = () => {
    if (typeof window === "undefined") {
      return {
        utm_source: utmSourceFallback || "Organic",

        utm_medium: utmMediumFallback || "SODE CO IN Organic",

        utm_term: "",

        utm_campaign: "",

        utm_content: "",

        page_url: "",
      };
    }

    const params = new URLSearchParams(window.location.search);

    const storedData = localStorage.getItem("utm_data");

    let parsedData: StoredUtmData = {};

    try {
      parsedData = storedData ? JSON.parse(storedData) : {};
    } catch {
      parsedData = {};
    }

    return {
      utm_source:
        params.get("utm_source") ||
        parsedData.utm_source ||
        utmSourceFallback ||
        "Organic",

      utm_medium:
        params.get("utm_medium") ||
        parsedData.utm_medium ||
        utmMediumFallback ||
        "SODE CO IN Organic",

      utm_term: params.get("utm_term") || parsedData.utm_term || "",

      utm_campaign: params.get("utm_campaign") || parsedData.utm_campaign || "",

      utm_content: params.get("utm_content") || parsedData.utm_content || "",

      page_url: window.location.href,
    };
  };

  /* =======================================================
     PHONE VALIDATION
  ======================================================== */

  const handlePhone = (value: string) => {
    setPhone(value);

    if (!value) {
      setPhoneError("Phone number is required");

      return;
    }

    try {
      if (!isValidPhoneNumber(value)) {
        setPhoneError("Invalid phone number");
      } else {
        setPhoneError("");
      }
    } catch {
      setPhoneError("Invalid phone number");
    }
  };

  /* =======================================================
     RESET FORM
  ======================================================== */

  const resetForm = () => {
    setName("");

    setPhone("");

    setEmail("");

    setState("");

    setCourse(defaultCourse);

    setPhoneError("");

    setFormError("");
  };

  /* =======================================================
     CHECK BROCHURE FLOW
  ======================================================== */

  const shouldStartBrochureFlow = () => {
    if (isBrochureForm) {
      return true;
    }

    return title?.trim().toLowerCase() === "download brochure";
  };

  /* =======================================================
     FORM SUBMIT
  ======================================================== */

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormError("");

    const finalCourse = hideCourseField ? defaultCourse : course;

    if (!name.trim()) {
      setFormError("Name is required");

      return;
    }

    if (!phone) {
      setFormError("Phone number is required");

      return;
    }

    if (phoneError) {
      setFormError(phoneError);

      return;
    }

    if (!email.trim()) {
      setFormError("Email is required");

      return;
    }

    if (!state) {
      setFormError("State is required");

      return;
    }

    if (!finalCourse) {
      setFormError("Course is required");

      return;
    }

    /*
     * Disabled section heading ko course ke roop mein
     * submit hone se prevent karta hai.
     */
    if (finalCourse.startsWith("__")) {
      setFormError("Please select a valid course");

      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: name.trim(),

        email: email.trim(),

        phone,

        state,

        course: finalCourse,

        form_name: formNameOverride || title?.trim() || "Website Form",

        source: sourceOverride || "SODE",

        ...getUTMParams(),
      };

      console.log("Lead payload:", payload);

      const response = await fetch(getAssetPath("/api/lead"), {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });

      const data: {
        success?: boolean;
        message?: string;
      } = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to submit form");
      }

      const brochureFlow = shouldStartBrochureFlow();

      if (brochureFlow) {
        sessionStorage.setItem("isBrochureFlow", "true");

        if (brochureUrl.trim()) {
          sessionStorage.setItem("brochureUrl", brochureUrl.trim());
        } else {
          sessionStorage.removeItem("brochureUrl");
        }
      } else {
        sessionStorage.removeItem("isBrochureFlow");

        sessionStorage.removeItem("brochureUrl");
      }

      resetForm();

      setClosing(true);

      window.setTimeout(() => {
        onSuccess?.();

        onClose?.();

        router.push(redirectUrl);
      }, 300);
    } catch (error) {
      console.error("Form submit error:", error);

      setFormError(
        error instanceof Error
          ? error.message
          : "Network error. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  /* =======================================================
     COMPONENT UI
  ======================================================== */

  return (
    <div
      className={`transition-all duration-300 ${
        closing
          ? "translate-y-2 scale-95 opacity-0"
          : "translate-y-0 scale-100 opacity-100"
      }`}
    >
      {/* ===================================================
          FORM HEADER
      ==================================================== */}

      {!hideHeader && (title || subtitle || onClose || showPhoneCallLink) && (
        <div className="relative mb-5">
          <div className="text-center">
            {title && (
              <h2 className="text-xl font-bold text-[#005382]">{title}</h2>
            )}

            {subtitle && (
              <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
            )}

            {showPhoneCallLink && (
              <div className="mt-2">
                <a
                  href="tel:+917065777755"
                  className="inline-flex rounded-full bg-[#c9232c] px-5 py-1 text-sm font-semibold text-white transition hover:bg-[#aa1c25]"
                >
                  +91 7065 7777 55
                </a>
              </div>
            )}
          </div>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close form"
              className="absolute right-0 top-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-red-500 transition hover:bg-red-50"
            >
              <X size={20} aria-hidden="true" />
            </button>
          )}
        </div>
      )}

      {/* ===================================================
          FORM
      ==================================================== */}

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name */}

        <Input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
          disabled={loading}
        />

        {/* Email */}

        <Input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setEmail(event.target.value);
          }}
          disabled={loading}
        />

        {/* Phone */}

        <PhoneField value={phone} onChange={handlePhone} error={phoneError} />

        {/* Course */}

        {!hideCourseField && (
          <SelectField
            placeholder="Select Course"
            options={finalCourseOptions}
            value={course}
            onChange={(value: string) => {
              setCourse(value);
            }}
          />
        )}

        {/* State */}

        <SelectField
          placeholder="Select Your State"
          options={STATE_OPTIONS}
          value={state}
          onChange={(value: string) => {
            setState(value);
          }}
        />

        {/* Fixed course information */}

        {hideCourseField && defaultCourse && (
          <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-700">
            Selected Course:{" "}
            <span className="font-semibold">{defaultCourse}</span>
          </div>
        )}

        {/* Form error */}

        {formError && (
          <p role="alert" className="text-sm font-medium text-red-500">
            {formError}
          </p>
        )}

        {/* Submit button */}

        <Button
          type="submit"
          disabled={loading}
          className={`h-11 w-full cursor-pointer bg-[#005382] font-semibold text-white ${submitButtonClassName}`}
        >
          {loading ? "Submitting..." : submitButtonText}
        </Button>
      </form>
    </div>
  );
}

"use client";

import {
  useEffect,
  useMemo,
  useRef,
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
  brochureUrl?: string;
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
  phoneLinkClassName?: string;
  submitButtonText?: string;
  submitButtonClassName?: string;
  redirectUrl?: string;

  /*
   * Brochure flow ko explicitly control karne ke liye.
   */
  isBrochureForm?: boolean;
  brochureUrl?: string;
  dynamicCourseBrochures?: boolean;
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
  /* =========================
     DOCTORATE
  ========================== */
  {
    value: "__DOCTORATE__",
    label: "Doctorate ━━",
    disabled: true,
  },
  {
    value: "DBA",
    label: "DBA",
    brochureUrl: "/assets/pdf/dba_overall.pdf",
  },
  {
    value: "MBA+DBA",
    label: "MBA + DBA",
    brochureUrl: "/assets/pdf/edgewood_dba_mba.pdf",
  },

  /* =========================
     MASTER
  ========================== */

  {
    value: "__MASTER__",
    label: "Master ━━",
    disabled: true,
  },
  {
    value: "MBA",
    label: "MBA",
    brochureUrl: "/assets/pdf/mba_overall.pdf",
  },
  {
    value: "MSC",
    label: "M.Sc. Data Science",
    brochureUrl: "/assets/pdf/iiitb_msc_ds.pdf",
  },
  {
    value: "MSC",
    label: "M.Sc. Machine Learning & AI",
    brochureUrl: "/assets/pdf/iiitb_msc_ml_ai.pdf",
  },
  {
    value: "DIPLOMA",
    label: "Executive Diploma in Machine Learning & AI",
    brochureUrl: "/assets/pdf/iiitb_msc_ml_ai.pdf",
  },

  /* =========================
     CERTIFICATION
  ========================== */

  {
    value: "__CERTIFICATION__",
    label: "Certification ━━",
    disabled: true,
  },
  {
    value: "CERTIFICATE",
    label: "Professional Certificate Programme in HR Management and Analytics",
    brochureUrl: "/assets/pdf/iim_main_brochure.pdf",
  },
  {
    value: "CERTIFICATE",
    label:
      "Professional Certificate Programme in Data Science with Generative AI",
    brochureUrl: "/assets/pdf/IIITB_PCP_in_DS_with_GI.pdf",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Post Graduate Certificate Programme in Data Science & AI",
    brochureUrl: "/assets/pdf/IIITB_EPGC_DS_AI.pdf",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Post Graduate Certificate in Generative AI & Agentic AI",
    brochureUrl: "/assets/pdf/iitkgp_main_brochure.pdf",
  },
  {
    value: "CERTIFICATE",
    label: "Advanced Certificate in Digital Marketing & Communication",
    brochureUrl: "/assets/pdf/mica_digital_marketing_and_communication.pdf",
  },
  {
    value: "CERTIFICATE",
    label: "Advanced Certificate in Digital Brand Communication Strategy",
    brochureUrl: "/assets/pdf/mica_digital_brand_communication_strategy.pdf",
  },

  /* =========================
     EXECUTIVE PROGRAMS
  ========================== */

  {
    value: "__EXECUTIVE_PROGRAMS__",
    label: "Executive Programs ━━",
    disabled: true,
  },
  {
    value: "PG PROGRAMS",
    label: "Executive Programme in Generative AI for Leaders",
    brochureUrl: "/assets/pdf/iiitb_Executive_Program_in_Generative_AI_for_Leaders.pdf",
  },
  {
    value: "PG PROGRAMS",
    label: "Executive Post Graduate Programme in Applied AI and Agentic AI",
    brochureUrl: "/assets/pdf/IIITB_Applied_AI_and_Agentic_AI.pdf",
  },
  {
    value: "PG PROGRAMS",
    label: "Chief Technology Officer & AI Leadership Programme",
    brochureUrl: "/assets/pdf/IIITB_CTOAI_leadership_program.pdf",
  },
];
/* =========================================================
   NORMALIZE COURSE OPTIONS
========================================================= */

function normalizeCourseOptions(
  options?: FormCourseOption[] | string[],
): FormCourseOption[] {
  const baseOptions = options && options.length > 0 ? options : DEFAULT_COURSE_OPTIONS;

  return baseOptions.map((option) => {
    if (typeof option === "string") {
      return {
        value: `${option}::${option}`,
        label: option,
      };
    }

    return {
      ...option,
      value: `${option.value}::${option.label}`,
    };
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
  phoneLinkClassName = "",
  submitButtonText = "Submit",
  submitButtonClassName = "",
  redirectUrl = "/thank-you",

  isBrochureForm = false,
  brochureUrl = "",
  dynamicCourseBrochures = false,
}: FormWrapperProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  /* =======================================================
     DISABLE CLOSE ON BACKDROP CLICK & ESCAPE KEY
  ======================================================== */

  useEffect(() => {
    // 1. Intercept and block Escape key close handlers at capture phase
    const handleEscapeCapture = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        event.preventDefault();
      }
    };
    window.addEventListener("keydown", handleEscapeCapture, true);

    // 2. Intercept and block backdrop clicks at capture phase
    if (!containerRef.current) {
      return () => {
        window.removeEventListener("keydown", handleEscapeCapture, true);
      };
    }

    let parent = containerRef.current.parentElement;
    const preventBackdropClick = (e: MouseEvent) => {
      let dialogEl: HTMLElement | null = containerRef.current;
      while (dialogEl && dialogEl.parentElement !== parent) {
        dialogEl = dialogEl.parentElement;
      }

      if (dialogEl && !dialogEl.contains(e.target as Node)) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    while (parent) {
      const isBackdrop =
        parent.getAttribute("role") === "presentation" ||
        parent.classList.contains("fixed") ||
        (typeof parent.className === "string" && (
          parent.className.includes("fixed") ||
          parent.className.includes("backdrop")
        ));

      if (isBackdrop) {
        parent.addEventListener("click", preventBackdropClick, true);
        parent.addEventListener("mousedown", preventBackdropClick, true);
        break;
      }
      parent = parent.parentElement;
    }

    return () => {
      window.removeEventListener("keydown", handleEscapeCapture, true);
      if (parent) {
        parent.removeEventListener("click", preventBackdropClick, true);
        parent.removeEventListener("mousedown", preventBackdropClick, true);
      }
    };
  }, []);

  /* =======================================================
     FORM STATE
  ======================================================== */

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");

  const [state, setState] = useState("");

  const [course, setCourse] = useState(() => {
    const options = normalizeCourseOptions(courseOptions);
    if (!defaultCourse) return "";
    const found = options.find((o) =>
      o.value === defaultCourse || o.value.split("::")[0] === defaultCourse || o.label === defaultCourse
    );
    return found ? found.value : defaultCourse;
  });

  const [courseLabel, setCourseLabel] = useState("");

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
    if (!defaultCourse) {
      setCourse("");
      return;
    }
    const found = finalCourseOptions.find((o) =>
      o.value === defaultCourse || o.value.split("::")[0] === defaultCourse || o.label === defaultCourse
    );
    setCourse(found ? found.value : defaultCourse);
  }, [defaultCourse, finalCourseOptions]);

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
      const apiCourse = finalCourse && finalCourse.includes("::")
        ? finalCourse.split("::")[0]
        : finalCourse;

      const payload = {
        name: name.trim(),

        email: email.trim(),

        phone,

        state,

        course: apiCourse,

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

        let finalBrochureUrl = brochureUrl.trim();
        if (dynamicCourseBrochures) {
          const selectedLabel = courseLabel.trim();
          const matchedOption = finalCourseOptions.find((o) =>
            selectedLabel ? o.label === selectedLabel : o.value === finalCourse
          );
          if (matchedOption && matchedOption.brochureUrl) {
            finalBrochureUrl = matchedOption.brochureUrl;
          }
        }

        if (finalBrochureUrl) {
          sessionStorage.setItem("brochureUrl", finalBrochureUrl);
        } else {
          sessionStorage.removeItem("brochureUrl");
        }
      } else {
        sessionStorage.removeItem("isBrochureFlow");

        sessionStorage.removeItem("brochureUrl");
      }

      // Save conversion source in sessionStorage
      try {
        let conversionSource = "lp";
        if (window.location.pathname.startsWith("/iimk")) {
          conversionSource = "iimk";
        } else if (window.location.pathname.startsWith("/iiitb")) {
          conversionSource = "iiitb";
        }
        sessionStorage.setItem("thankYouConversionSource", conversionSource);
      } catch (e) {
        console.error(e);
      }

      resetForm();

      setClosing(true);

      window.setTimeout(() => {
        onSuccess?.();

        onClose?.();

        router.push("/thank-you");
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
      ref={containerRef}
      className={`transition-all duration-300 ${closing
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
                  className={`inline-flex rounded-full px-5 py-1 text-sm font-semibold text-white transition ${
                    phoneLinkClassName || "bg-[#c9232c] hover:bg-[#aa1c25]"
                  }`}
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
            onChange={(value: string, label?: string) => {
              setCourse(value);
              if (label) {
                setCourseLabel(label);
              }
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

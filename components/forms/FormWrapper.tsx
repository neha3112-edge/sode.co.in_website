/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { isValidPhoneNumber } from "libphonenumber-js";
import { X } from "lucide-react";

import Input from "@/components/ui/Input";
import PhoneField from "./PhoneField";
import SelectField from "@/components/ui/SelectField";
import { Button } from "@/components/ui/Button";
import { getAssetPath } from "@/lib/utils";

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

  // Header ko hide karne ke liye
  hideHeader?: boolean;

  // Page-wise course configuration
  courseOptions?: FormCourseOption[] | string[];

  // Single-course page ke liye
  defaultCourse?: string;
  hideCourseField?: boolean;

  // Page-wise lead information
  formNameOverride?: string;
  sourceOverride?: string;

  // Optional UTM defaults
  utmSourceFallback?: string;
  utmMediumFallback?: string;

  // Other options
  showPhoneCallLink?: boolean;
  submitButtonText?: string;
  submitButtonClassName?: string;
  redirectUrl?: string;
};

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

const DEFAULT_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "DBA",
    label: "DBA",
  },
  {
    value: "MBA+DBA",
    label: "MBA + DBA",
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
    value: "EXECUTIVE_DIPLOMA_ML_AI",
    label: "Executive Diploma in Machine Learning & AI",
  },
  {
    value: "CERTIFICATE",
    label: "Certificate Programme",
  },
  {
    value: "PG_PROGRAM",
    label: "Executive Programme",
  },
];

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
}: FormWrapperProps) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [course, setCourse] = useState(defaultCourse);

  const [phoneError, setPhoneError] = useState("");
  const [formError, setFormError] = useState("");

  const [loading, setLoading] = useState(false);
  const [closing, setClosing] = useState(false);

  const finalCourseOptions = useMemo(() => {
    if (!courseOptions || courseOptions.length === 0) {
      return DEFAULT_COURSE_OPTIONS;
    }

    return courseOptions;
  }, [courseOptions]);

  useEffect(() => {
    setCourse(defaultCourse);
  }, [defaultCourse]);

  /*
  |--------------------------------------------------------------------------
  | Current URL ke UTM parameters save karna
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const existingStoredData = localStorage.getItem("utm_data");

    let existingUtmData: Record<string, string | null> = {};

    try {
      existingUtmData = existingStoredData
        ? JSON.parse(existingStoredData)
        : {};
    } catch {
      existingUtmData = {};
    }

    const utmData = {
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

  /*
  |--------------------------------------------------------------------------
  | Get UTM data
  |--------------------------------------------------------------------------
  */

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

    let parsedData: Record<string, string | null> = {};

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

  /*
  |--------------------------------------------------------------------------
  | Phone validation
  |--------------------------------------------------------------------------
  */

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

  /*
  |--------------------------------------------------------------------------
  | Reset form
  |--------------------------------------------------------------------------
  */

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setState("");
    setCourse(defaultCourse);
    setPhoneError("");
    setFormError("");
  };

  /*
  |--------------------------------------------------------------------------
  | Form submit
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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

      const data = await response.json();

      if (!response.ok || !data?.success) {
        throw new Error(data?.message || "Unable to submit form");
      }

      resetForm();
      setClosing(true);

      if (title?.trim().toLowerCase() === "download brochure") {
        sessionStorage.setItem("isBrochureFlow", "true");
      } else {
        sessionStorage.removeItem("isBrochureFlow");
      }

      setTimeout(() => {
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

  return (
    <div
      className={`transition-all duration-300 ${
        closing
          ? "translate-y-2 scale-95 opacity-0"
          : "translate-y-0 scale-100 opacity-100"
      }`}
    >
      {/* Form Header */}
      {!hideHeader && (title || subtitle || onClose) && (
        <div className="relative mb-5">
          <div className="text-center">
            {title && (
              <h2 className="text-xl font-bold text-[#c9232c]">{title}</h2>
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
              className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-red-500 transition hover:bg-red-50"
            >
              <X size={20} />
            </button>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(event: any) => setName(event.target.value)}
          disabled={loading}
        />

        <Input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(event: any) => setEmail(event.target.value)}
          disabled={loading}
        />

        <PhoneField value={phone} onChange={handlePhone} error={phoneError} />

        {!hideCourseField && (
          <SelectField
            placeholder="Select Course"
            options={finalCourseOptions}
            value={course}
            onChange={(value: string) => setCourse(value)}
          />
        )}

        <SelectField
          placeholder="Select Your State"
          options={STATE_OPTIONS}
          value={state}
          onChange={(value: string) => setState(value)}
        />

        {hideCourseField && defaultCourse && (
          <div className="border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-700">
            Selected Course:{" "}
            <span className="font-semibold">{defaultCourse}</span>
          </div>
        )}

        {formError && (
          <p className="text-sm font-medium text-red-500">{formError}</p>
        )}

        <Button
          type="submit"
          disabled={loading}
          className={`h-11 w-full bg-[#c9232c] font-semibold text-white hover:bg-[#aa1c25] ${submitButtonClassName}`}
        >
          {loading ? "Submitting..." : submitButtonText}
        </Button>
      </form>
    </div>
  );
}

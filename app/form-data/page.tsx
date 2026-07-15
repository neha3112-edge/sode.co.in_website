"use client";

import { useEffect, useMemo, useState } from "react";

import { useRouter } from "next/navigation";

import { Alert, Button, Form, Input, Select, Typography } from "antd";

import { CloseOutlined, PhoneOutlined } from "@ant-design/icons";

import { isValidPhoneNumber } from "libphonenumber-js";

import { getAssetPath } from "@/lib/utils";

import PhoneField from "@/components/forms/PhoneField";

/* =========================================================
   ANT DESIGN COMPONENTS
========================================================= */

const { Title, Paragraph, Text } = Typography;

/* =========================================================
   TYPES
========================================================= */

export type FormCourseOption = {
  value: string;
  label: string;
  disabled?: boolean;
  hidden?: boolean;
};

export type FormWrapperProps = {
  title?: string;
  subtitle?: string;

  onClose?: () => void;
  onSuccess?: () => void;

  /*
   * Form heading hide karne ke liye.
   */
  hideHeader?: boolean;

  /*
   * Page-wise course options.
   *
   * FormCourseOption[] aur string[] dono supported hain.
   */
  courseOptions?: FormCourseOption[] | string[];

  /*
   * Single course landing page ke liye.
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
   * Brochure flow control.
   */
  isBrochureForm?: boolean;
  brochureUrl?: string;
};

type FormValues = {
  name: string;
  email: string;
  state: string;
  course?: string;
};

type StoredUtmData = {
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_term?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
};

type LeadResponse = {
  success?: boolean;
  message?: string;
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
  },
  {
    value: "MBA+DBA",
    label: "MBA + DBA",
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
  },
  {
    value: "MSC",
    label: "M.Sc. Data Science",
  },
  {
    value: "MSC",
    label: "M.Sc. Machine Learning & AI",
  },
  {
    value: "DIPLOMA",
    label: "Executive Diploma in Machine Learning & AI",
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
  },
  {
    value: "CERTIFICATE",
    label:
      "Professional Certificate Programme in Data Science with Generative AI",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Post Graduate Certificate Programme in Data Science & AI",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Post Graduate Certificate in Generative AI & Agentic AI",
  },
  {
    value: "CERTIFICATE",
    label: "Advanced Certificate in Digital Marketing & Communication",
  },
  {
    value: "CERTIFICATE",
    label: "Advanced Certificate in Digital Brand Communication Strategy",
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
  },
  {
    value: "PG PROGRAMS",
    label: "Executive Post Graduate Programme in Applied AI and Agentic AI",
  },
  {
    value: "PG PROGRAMS",
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

  const [form] = Form.useForm<FormValues>();

  const [phone, setPhone] = useState("");
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

  const antdCourseOptions = useMemo(() => {
    return finalCourseOptions
      .filter((option) => !option.hidden)
      .map((option) => ({
        value: option.value,
        label: option.label,
        disabled: option.disabled,
      }));
  }, [finalCourseOptions]);

  const antdStateOptions = useMemo(() => {
    return STATE_OPTIONS.map((stateName) => ({
      value: stateName,
      label: stateName,
    }));
  }, []);

  /* =======================================================
     UPDATE DEFAULT COURSE
  ======================================================== */

  useEffect(() => {
    form.setFieldValue("course", defaultCourse || undefined);
  }, [defaultCourse, form]);

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

  const handlePhoneChange = (value: string) => {
    setPhone(value);

    if (!value) {
      setPhoneError("Phone number is required");
      return;
    }

    try {
      if (!isValidPhoneNumber(value)) {
        setPhoneError("Please enter a valid phone number");
        return;
      }

      setPhoneError("");
    } catch {
      setPhoneError("Please enter a valid phone number");
    }
  };

  const validatePhone = () => {
    if (!phone) {
      setPhoneError("Phone number is required");
      return false;
    }

    try {
      if (!isValidPhoneNumber(phone)) {
        setPhoneError("Please enter a valid phone number");
        return false;
      }
    } catch {
      setPhoneError("Please enter a valid phone number");
      return false;
    }

    setPhoneError("");

    return true;
  };

  /* =======================================================
     RESET FORM
  ======================================================== */

  const resetForm = () => {
    form.resetFields();

    form.setFieldValue("course", defaultCourse || undefined);

    setPhone("");
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

  const handleSubmit = async (values: FormValues) => {
    setFormError("");

    const phoneIsValid = validatePhone();

    if (!phoneIsValid) {
      return;
    }

    const finalCourse = hideCourseField ? defaultCourse : values.course || "";

    if (!finalCourse) {
      setFormError("Course is required");
      return;
    }

    /*
     * Disabled section headings ko course ke roop mein
     * submit hone se prevent karta hai.
     */
    if (finalCourse.startsWith("__")) {
      setFormError("Please select a valid course");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: values.name.trim(),

        email: values.email.trim(),

        phone,

        state: values.state,

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

      let data: LeadResponse = {};

      try {
        data = (await response.json()) as LeadResponse;
      } catch {
        data = {};
      }

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
     FORM SUBMIT FAILURE
  ======================================================== */

  const handleSubmitFailed = () => {
    setFormError("Please complete all required fields.");

    validatePhone();
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
              <Title
                level={2}
                className="!mb-0 !text-xl !font-bold !text-[#005382]"
              >
                {title}
              </Title>
            )}

            {subtitle && (
              <Paragraph className="!mb-0 !mt-1 !text-sm !text-gray-600">
                {subtitle}
              </Paragraph>
            )}

            {showPhoneCallLink && (
              <div className="mt-3">
                <a
                  href="tel:+917065777755"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c9232c] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#aa1c25] hover:text-white"
                >
                  <PhoneOutlined />
                  +91 7065 7777 55
                </a>
              </div>
            )}
          </div>

          {onClose && (
            <Button
              type="text"
              shape="circle"
              danger
              icon={<CloseOutlined />}
              onClick={onClose}
              aria-label="Close form"
              className="!absolute !right-0 !top-0"
            />
          )}
        </div>
      )}

      {/* ===================================================
          FORM
      ==================================================== */}

      <Form<FormValues>
        form={form}
        layout="vertical"
        requiredMark={false}
        initialValues={{
          name: "",
          email: "",
          state: undefined,
          course: defaultCourse || undefined,
        }}
        onFinish={handleSubmit}
        onFinishFailed={handleSubmitFailed}
        autoComplete="off"
        className="w-full"
      >
        {/* Name */}

        <Form.Item
          name="name"
          className="!mb-3"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Please enter your name",
            },
            {
              min: 2,
              message: "Name must contain at least 2 characters",
            },
          ]}
        >
          <Input
            size="large"
            placeholder="Enter Your Name"
            disabled={loading}
            maxLength={100}
            autoComplete="name"
            className="!rounded-lg"
          />
        </Form.Item>

        {/* Email */}

        <Form.Item
          name="email"
          className="!mb-3"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Please enter your email",
            },
            {
              type: "email",
              message: "Please enter a valid email address",
            },
          ]}
        >
          <Input
            size="large"
            type="email"
            placeholder="Enter Your Email"
            disabled={loading}
            maxLength={150}
            autoComplete="email"
            className="!rounded-lg"
          />
        </Form.Item>

        {/* Phone */}

        <div className="mb-3">
          <PhoneField
            value={phone}
            onChange={handlePhoneChange}
            error={phoneError}
          />
        </div>

        {/* Course */}

        {!hideCourseField && (
          <Form.Item
            name="course"
            className="!mb-3"
            rules={[
              {
                required: true,
                message: "Please select a course",
              },
              {
                validator: async (_, value?: string) => {
                  if (value && value.startsWith("__")) {
                    throw new Error("Please select a valid course");
                  }
                },
              },
            ]}
          >
            <Select
              size="large"
              showSearch
              allowClear
              placeholder="Select Course"
              disabled={loading}
              options={antdCourseOptions}
              optionFilterProp="label"
              className="w-full"
              popupMatchSelectWidth
              filterOption={(input, option) =>
                String(option?.label || "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            />
          </Form.Item>
        )}

        {/* State */}

        <Form.Item
          name="state"
          className="!mb-3"
          rules={[
            {
              required: true,
              message: "Please select your state",
            },
          ]}
        >
          <Select
            size="large"
            showSearch
            allowClear
            placeholder="Select Your State"
            disabled={loading}
            options={antdStateOptions}
            optionFilterProp="label"
            className="w-full"
            popupMatchSelectWidth
            filterOption={(input, option) =>
              String(option?.label || "")
                .toLowerCase()
                .includes(input.toLowerCase())
            }
          />
        </Form.Item>

        {/* Fixed course information */}

        {hideCourseField && defaultCourse && (
          <div className="mb-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-3">
            <Text className="!text-sm !text-gray-700">
              Selected Course: <Text strong>{defaultCourse}</Text>
            </Text>
          </div>
        )}

        {/* Form error */}

        {formError && (
          <Alert type="error" showIcon message={formError} className="!mb-3" />
        )}

        {/* Submit button */}

        <Form.Item className="!mb-0">
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            block
            loading={loading}
            disabled={loading}
            className={`
              !h-11
              !rounded-lg
              !border-none
              !bg-[#005382]
              !font-semibold
              hover:!bg-[#003f63]
              ${submitButtonClassName}
            `}
          >
            {submitButtonText}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { isValidPhoneNumber } from "libphonenumber-js";
import Input from "./Input";
import PhoneField from "./PhoneField";
import SelectField from "./SelectField";
import { Button } from "./Button";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

export default function FormWrapper({
    title,
    subtitle,
    onClose,
}: {
    title?: string;
    subtitle?: string;
    onClose?: () => void;
    isBrochure?: boolean;
}) {
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [formError, setFormError] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [state, setState] = useState("");
    const [course, setCourse] = useState("");

    const [loading, setLoading] = useState(false);
    const [closing, setClosing] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if (typeof window === "undefined") return;

        const params = new URLSearchParams(window.location.search);

        const utmData = {
            utm_source: params.get("utm_source"),
            utm_medium: params.get("utm_medium"),
            utm_term: params.get("utm_term"),
            utm_campaign: params.get("utm_campaign"),
            utm_content: params.get("utm_content"),
        };
        localStorage.setItem("utm_data", JSON.stringify(utmData));
    }, []);

    const getUTMParams = () => {
        if (typeof window === "undefined") return {};

        const stored = localStorage.getItem("utm_data");
        const params = new URLSearchParams(window.location.search);
        const parsed = stored ? JSON.parse(stored) : {};

        return {
            utm_source: params.get("utm_source") || parsed.utm_source || "Organic",
            utm_medium: params.get("utm_medium") || parsed.utm_medium || "SODE CO IN Organic",
            utm_term: params.get("utm_term") || parsed.utm_term || "",
            utm_campaign: params.get("utm_campaign") || parsed.utm_campaign || "",
            utm_content: params.get("utm_content") || parsed.utm_content || "",
            page_url: window.location.href,
        };
    };

    const handlePhone = (value: string) => {
        setPhone(value);

        try {
            if (!value || !isValidPhoneNumber(value)) {
                setPhoneError("Invalid phone number");
            } else {
                setPhoneError("");
            }
        } catch {
            setPhoneError("Invalid phone number");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormError("");

        if (!name || !email || !phone || !state || !course) {
            setFormError("All fields are required");
            return;
        }

        if (phoneError) return;

        setLoading(true);

        try {
            const res = await fetch(getAssetPath("/api/lead"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    course,
                    state,
                    form_name: title?.trim() || "Website Form",
                    ...getUTMParams(),
                }),
            });

            const data = await res.json();

            if (res.ok && data?.success) {
                setClosing(true);

                setTimeout(() => {
                    onClose?.();

                    // ✅ IMPORTANT: SAVE BASED ON FORM NAME
                    if (title?.trim() === "Download Brochure") {
                        sessionStorage.setItem("isBrochureFlow", "true");
                    } else {
                        sessionStorage.removeItem("isBrochureFlow");
                    }

                    router.push("/thank-you");
                }, 300);
            } else {
                setFormError(data?.message || "Something went wrong");
            }
        } catch (err) {
            console.error("Submit Error:", err);
            setFormError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className={`transition-all duration-300 ${closing
                ? "opacity-0 scale-95 translate-y-2"
                : "opacity-100 scale-100 translate-y-0"
                }`}
        >
            {(title || subtitle) && (
                <div className="relative mb-6">
                    <div className="text-center">
                        {title && (
                            <h2 className="text-xl font-bold text-[#1C3569]">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-gray-600 text-sm">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {onClose && (
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-0 text-gray-400 hover:text-black"
                        >
                            <X className="text-red-500" />
                        </button>
                    )}
                </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
                <Input placeholder="Enter Your Name" value={name} onChange={(e: any) => setName(e.target.value)} />
                <PhoneField value={phone} onChange={handlePhone} error={phoneError} />
                <Input type="email" placeholder="Enter Your Email" value={email} onChange={(e: any) => setEmail(e.target.value)} />

                <SelectField
                    placeholder="Select State"
                    options={[
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
                        "Puducherry"
                    ]}
                    value={state}
                    onChange={(val: string) => setState(val)}
                />

                <SelectField
                    placeholder="Select Course"
                    options={[
                        { value: "", label: "Doctorate ━━", disabled: true },
                        { value: "DBA", label: "DBA" },
                        { value: "MBA+DBA", label: "MBA + DBA" },
                        { value: "", label: "Master ━━", disabled: true },
                        { value: "MBA", label: "MBA" },
                        { value: "MSC", label: "M.Sc. Data Science" },
                        { value: "MSC", label: "M.Sc. Machine Learning & AI" },
                        { value: "DIPLOMA", label: "Executive Diploma in Machine Learning & AI" },
                        { value: "", label: "Certification ━━", disabled: true },
                        { value: "CERTIFICATE", label: "Professional Certificate Programme in HR Management and Analytics" },
                        { value: "CERTIFICATE", label: "Professional Certificate Programme in Data Science with Generative AI" },
                        { value: "CERTIFICATE", label: "Executive Post Graduate Certificate Programme in Data Science & AI" },
                        { value: "CERTIFICATE", label: "Executive Post Graduate Certificate in Generative AI & Agentic AI" },
                        { value: "CERTIFICATE", label: "Advanced Certificate in Digital Marketing & Communication" },
                        { value: "CERTIFICATE", label: "Advanced Certificate in Digital Brand Communication Strategy" },
                        { value: "", label: "Executive Programs ━━", disabled: true },
                        { value: "PG PROGRAMS", label: "Executive Programme in Generative AI for Leaders" },
                        { value: "PG PROGRAMS", label: "Executive Post Graduate Programme in Applied AI and Agentic AI" },
                        { value: "PG PROGRAMS", label: "Chief Technology Officer & AI Leadership Programme" }
                    ]}
                    value={course}
                    onChange={(val: string) => setCourse(val)}
                />

                {formError && <p className="text-red-500 text-sm">{formError}</p>}

                <Button type="submit" disabled={loading} className="w-full bg-[#1C3569] text-white h-12">
                    {loading ? "Submitting..." : "Submit"}
                </Button>
            </form>
        </div>
    );
}

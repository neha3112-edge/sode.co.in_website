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
            utm_medium: params.get("utm_medium") || parsed.utm_medium || "MBA_Organic",
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
            const res = await fetch("/1-year-mba/api/lead", {
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
                    placeholder="Select Specialization"
                    options={[
                        "MBA – AI for Business",
                        "MBA – Digital Finance",
                        "MBA – Strategy & Leadership",
                        "MBA – Finance Management",
                        "MBA – Marketing Management",
                        "MBA – Human Resource Management",
                        "MBA – Operations Management",
                        "MBA – Information Technology",
                        "MBA – Healthcare and Hospital Management",
                        "MBA – Data Analytics",
                        "MBA – Business Analytics",
                        "MBA – International Business",
                        "MBA – Project Management",
                        "MBA – Hospitality Management",
                        "MBA – International Finance",
                        "MBA – Retail Management",
                        "MBA – Logistics and Supply Chain Management",
                        "MBA – Fintech Management",
                        "MBA – Banking and Finance",
                        "MBA – General Management"
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

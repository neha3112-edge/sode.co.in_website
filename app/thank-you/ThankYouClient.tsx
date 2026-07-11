"use client";

import {
    Mail,
    Headphones,
    Home,
} from "lucide-react";
import Link from "next/link";
import Lottie from "lottie-react";
import successAnimation from "@/public/assets/animations/check.json";

import { useEffect, useState } from "react";
import { getAssetPath } from "@/lib/utils";


export default function ThankYouClient() {
    const [progress, setProgress] = useState(0);

    // ✅ DERIVED VALUE
    const isBrochure =
        typeof window !== "undefined" &&
        sessionStorage.getItem("isBrochureFlow") === "true";

    useEffect(() => {
        if (!isBrochure) return;

        let value = 0;

        const interval = setInterval(() => {
            value += 1;

            if (value <= 100) {
                setProgress(value);
            }
        }, 10); // 10ms * 100 = 1000ms (1 second)

        const timer = setTimeout(() => {
            const brochureUrl = sessionStorage.getItem("brochureUrl") || getAssetPath("/assets/pdf/brochure.pdf");
            const newTab = window.open(brochureUrl, "_blank");

            if (!newTab) {
                alert("Please allow popups to view the brochure.");
            }

            sessionStorage.removeItem("isBrochureFlow");
            sessionStorage.removeItem("brochureUrl");
        }, 1000); // 1 second

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [isBrochure]);

    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-20 px-4 bg-gray-50 mx-auto">
            <div className="w-full max-w-sm md:max-w-4xl bg-white rounded-[30px] overflow-hidden shadow-2xl transition-all duration-300">

                <div className="p-6 md:p-12 text-center">

                    <div className="flex flex-col items-center mb-8">
                        <div className="w-32 h-32 md:w-40 md:h-40 mb-4">
                            <Lottie animationData={successAnimation} loop={false} />
                        </div>

                        <p className="text-xs tracking-widest text-[#8B7500] mb-2 font-bold">
                            INQUIRY SUCCESSFUL
                        </p>

                        <h1 className="text-2xl md:text-4xl font-bold text-[#1C3569] mb-3">
                            Thank You for Enquiring
                        </h1>

                        {isBrochure && (
                            <div className="max-w-lg mx-auto mb-4">
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    Your brochure is being prepared. It will download automatically.
                                </p>

                                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mt-4">
                                    <div
                                        className="bg-[#22c55e] h-full transition-all duration-75"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>

                                <p className="text-xs text-gray-400 mt-2">
                                    Preparing your download...
                                </p>
                            </div>
                        )}

                        <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                            Our counselor will contact you shortly to discuss your academic
                            aspirations and guide you through the next steps.
                        </p>

                    </div>

                    {/* Info Boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

                        <div className="bg-[#F1F5F9] rounded-2xl p-5 text-left border border-transparent hover:border-[#FFC107] transition-all">
                            <div className="flex gap-4 items-start">
                                <div className="bg-white p-2 rounded-lg shadow-sm">
                                    <Mail className="text-[#8B7500]" size={22} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#1C3569] text-sm md:text-base">
                                        Check Your Inbox
                                    </h3>
                                    <p className="text-gray-600 text-xs md:text-sm mt-1">
                                        We’ve sent a digital brochure and program details to your registered email address.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#F1F5F9] rounded-2xl p-5 text-left border border-transparent hover:border-[#FFC107] transition-all">
                            <div className="flex gap-4 items-start">
                                <div className="bg-white p-2 rounded-lg shadow-sm">
                                    <Headphones className="text-[#8B7500]" size={22} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#1C3569] text-sm md:text-base">
                                        Expert Guidance
                                    </h3>
                                    <p className="text-gray-600 text-xs md:text-sm mt-1">
                                        Expect a call within the next 24 business hours from our dedicated admissions desk.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-3">

                            <Link
                                href="/"
                                className="flex-1 bg-[#FFC107] hover:bg-[#e6af06] text-black py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                            >
                                <Home size={18} />
                                Back to Home
                            </Link>

                            {/* <Link
                                href="/degrees"
                                className="flex-1 border-2 border-gray-200 hover:bg-gray-50 text-[#1C3569] py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                            >
                                Explore Degrees
                                <ArrowRight size={18} />
                            </Link> */}

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
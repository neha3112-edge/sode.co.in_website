"use client";

import { useState } from "react";
import Image from "next/image";
import FormWrapper from "@/components/ui/FormWrapper";
import confetti from "canvas-confetti";

export default function FloatingButton() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);

        // 🎉 CONFETTI BLAST
        confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 },
        });

        // 🎉 EXTRA SIDE BURSTS (premium feel)
        setTimeout(() => {
            confetti({
                particleCount: 60,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
            });

            confetti({
                particleCount: 60,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
            });
        }, 300);
    };

    return (
        <>
            {/* FLOAT BUTTON */}
            <button
                onClick={handleClick}
                className="fixed bottom-20 right-6 z-50 bg-[#1C3569] hover:bg-[#162a54] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
            >
                <Image
                    src="/1-year-mba/assets/images/unnamed (1).gif"
                    alt="Open Form"
                    width={50}
                    height={50}
                    className="object-contain rounded-full"
                />
            </button>

            {/* MODAL */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white w-full max-w-md rounded-xl shadow-2xl relative p-6 animate-[scaleIn_0.2s_ease]"
                    >
                        <FormWrapper
                            title="Get Scholarship Coupon Code"
                            subtitle="Our experts will contact you"
                            onClose={() => setOpen(false)}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
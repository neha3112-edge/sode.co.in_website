/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneField({
  value,
  onChange,
  error,
}: any) {
  return (
    <div className="w-full max-w-full overflow-hidden">
      <PhoneInput
        country={"in"}
        value={value || ""}
        placeholder="Enter Your Number"
        enableSearch

        // ✅ FIX: always send with +
        onChange={(val: string) => {
          onChange("+" + val);
        }}

        inputClass="!w-full !h-12 !rounded-md !pl-14"
        buttonClass="!border-none"
      />

      {error && (
        <p className="text-red-500 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
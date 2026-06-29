/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

export default function SelectField({
  options = [],
  placeholder = "Select",
  value,
  onChange,
}: any) {
  return (
    <select
      value={value || ""} // ✅ CONTROLLED
      onChange={(e) => onChange(e.target.value)} // ✅ IMPORTANT
      className="w-full px-4 py-3 rounded-md border border-gray-300 bg-[#F9FAFB]"
    >
      <option value="" disabled>
        {placeholder}
      </option>

      {options.map((opt: any, i: number) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
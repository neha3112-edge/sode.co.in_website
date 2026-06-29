"use client";

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-[#F9FAFB] placeholder-gray-700 font-medium"
    />
  );
}
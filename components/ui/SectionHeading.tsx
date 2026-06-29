import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12", className)} {...props}>
      <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
}

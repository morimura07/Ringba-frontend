import { cn } from "@/utils/cn";

const variantClasses = {
  default: "rounded-2xl border border-gray-100 bg-white shadow-sm",
  feature: "rounded-2xl bg-[#f2f2f2] p-8",
  stat: "rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md",
  product: "rounded-3xl bg-white p-8 shadow-sm hover:shadow-md",
  showcase: "rounded-[2rem] bg-[#eef2f6] p-8",
  glass: "rounded-2xl border border-white/20 bg-white/5",
};

export function Card({ children, className, variant = "default", ...props }) {
  return (
    <div className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </div>
  );
}

export function CardIcon({ children, className }) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary-dark/10",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className }) {
  return (
    <h3 className={cn("text-lg font-bold text-gray-900", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className }) {
  return (
    <p className={cn("text-sm leading-relaxed text-gray-600", className)}>
      {children}
    </p>
  );
}

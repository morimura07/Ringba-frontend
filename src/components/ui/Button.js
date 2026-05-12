import Link from "next/link";
import { cn } from "@/utils/cn";

const variantClasses = {
  primary:
    "bg-brand-primary-dark text-white shadow-sm hover:bg-[#3b0764] focus-visible:ring-brand-primary-dark",
  secondary:
    "bg-white text-brand-primary-dark shadow-sm hover:bg-white/95 focus-visible:ring-brand-primary-dark",
  outline:
    "border border-white/30 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white",
  ghost: "bg-transparent text-white hover:bg-white/10 focus-visible:ring-white",
  subtle:
    "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50 focus-visible:ring-brand-primary-dark",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  rounded = "full",
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    rounded === "full" ? "rounded-full" : "rounded-xl",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

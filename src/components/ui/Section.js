import { cn } from "@/utils/cn";

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-[1200px]",
};

export function Section({ id, className, children, ...props }) {
  return (
    <section id={id} className={cn("px-4 py-24 sm:px-6 lg:px-8", className)} {...props}>
      {children}
    </section>
  );
}

export function SectionContainer({ children, className, size = "full" }) {
  return (
    <div className={cn("mx-auto", containerSizes[size], className)}>
      {children}
    </div>
  );
}

export function SectionHeader({ children, className, align = "center" }) {
  return (
    <div
      className={cn(
        "mb-16 flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SectionBadge({ children, className }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SectionHeading({ children, className }) {
  return (
    <h2
      className={cn(
        "text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl md:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionDescription({ children, className }) {
  return (
    <p className={cn("max-w-2xl text-lg leading-relaxed text-gray-600", className)}>
      {children}
    </p>
  );
}

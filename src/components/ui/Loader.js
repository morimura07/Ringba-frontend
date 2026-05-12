import { cn } from "@/utils/cn";

export function Loader({ className, label = "Loading" }) {
  return (
    <div
      className={cn("flex items-center justify-center gap-3", className)}
      role="status"
      aria-live="polite"
    >
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-brand-primary/20 border-t-brand-primary" />
      <span className="text-sm font-medium text-gray-600">{label}</span>
    </div>
  );
}

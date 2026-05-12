import { cn } from "@/utils/cn";

export function Input({ className, label, id, ...props }) {
  const inputId = id || props.name;

  return (
    <label className="block w-full">
      {label ? (
        <span className="mb-2 block text-sm font-medium text-gray-700">
          {label}
        </span>
      ) : null}
      <input
        id={inputId}
        className={cn(
          "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20",
          className
        )}
        {...props}
      />
    </label>
  );
}

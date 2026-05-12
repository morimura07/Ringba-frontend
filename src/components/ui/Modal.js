"use client";

import { useEffect } from "react";
import { cn } from "@/utils/cn";
import { Button } from "./Button";

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
  showCloseButton = true,
}) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div
        className={cn(
          "relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl",
          className
        )}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          {title ? (
            <h2 id="modal-title" className="text-xl font-bold text-gray-900">
              {title}
            </h2>
          ) : (
            <span />
          )}
          {showCloseButton ? (
            <Button
              variant="subtle"
              size="sm"
              rounded="xl"
              onClick={onClose}
              aria-label="Close"
            >
              Close
            </Button>
          ) : null}
        </div>
        {children}
      </div>
    </div>
  );
}

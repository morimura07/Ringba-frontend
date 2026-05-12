"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import {
  ChatIcon,
  ChevronDown,
  PhoneIcon,
  RingbaWaveMark,
} from "@/assets/icons";
import { primaryNavLinks } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";

export function SiteHeader() {
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = (href, hasDropdown) => {
    if (hasDropdown) {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
      setHoveredDropdown(href);
    }
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null);
    }, 300); // 300ms delay
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5 sm:px-6 lg:px-8 lg:pt-6">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-3 rounded-2xl border border-white/15 bg-[#1e1b4b]/58 px-4 py-2.5 shadow-[0_18px_45px_-25px_rgba(0,0,0,0.65)] backdrop-blur-xl md:gap-6 md:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 text-white">
          <RingbaWaveMark className="h-6 w-[34px] text-white" />
          <span className="text-[17px] font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {primaryNavLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => handleMouseEnter(link.href, link.dropdown)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={link.href}
                className="inline-flex items-center gap-1 text-[15px] font-medium text-white/95 transition hover:text-white"
              >
                {link.label}
                {link.chevron ? (
                  <ChevronDown
                    className={`h-3 w-3 text-white/75 transition ${
                      hoveredDropdown === link.href ? "rotate-180" : ""
                    }`}
                  />
                ) : null}
              </Link>

              {link.dropdown && hoveredDropdown === link.href && (
                <div className="absolute left-0 top-full mt-2 w-48 rounded-lg border border-white/15 bg-[#1e1b4b]/95 px-2 py-2 shadow-xl backdrop-blur-xl">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded px-3 py-2 text-[14px] text-white/90 transition hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/login"
            className="hidden rounded-full border border-white/35 bg-transparent px-4 py-2 text-[13px] font-medium text-white transition hover:bg-white/10 sm:inline-flex sm:px-5 sm:text-sm"
          >
            Login
          </Link>
          <Link
            href="#get-started"
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-brand-primary-dark shadow-sm transition hover:bg-white/95 sm:px-6 sm:text-sm"
          >
            Sign Up
          </Link>
          <div className="hidden items-center gap-2 border-l border-white/15 pl-3 sm:flex">
            <button
              type="button"
              className="rounded-lg p-1.5 text-white transition hover:bg-white/10"
              aria-label="Support chat"
            >
              <ChatIcon className="h-5 w-5" />
            </button>
            <a
              href={`tel:${siteConfig.supportPhone}`}
              className="rounded-lg p-1.5 text-white transition hover:bg-white/10"
              aria-label="Call support"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

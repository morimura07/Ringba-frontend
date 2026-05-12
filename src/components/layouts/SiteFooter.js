import Link from "next/link";
import { footerColumns } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";

function LogoGlyph() {
  return (
    <svg
      className="h-9 w-9 shrink-0"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="36" height="36" rx="9" fill="white" fillOpacity="0.08" />
      <path
        d="M10 14c0-1.1.9-2 2-2h2v4h-2a2 2 0 0 1-2-2Zm4-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1h-5v-4Zm6 3h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1h-3v-4Zm-6 5h4a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1h-5v4Zm-4-3v3a2 2 0 0 0 2 2h2v-5h-2a2 2 0 0 1-2-2v2Z"
        fill="white"
      />
    </svg>
  );
}

function SocialIcon({ children, label }) {
  return (
    <a
      href="#"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-gray-300 transition hover:border-white/30 hover:text-white"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer id="legal" className="bg-[#120822] px-4 pt-16 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-white">
              <LogoGlyph />
              <span className="text-lg font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <div className="mt-6 flex gap-3">
              <SocialIcon label="Facebook">
                <span className="text-xs font-bold">f</span>
              </SocialIcon>
              <SocialIcon label="Twitter">
                <span className="text-xs font-bold">𝕏</span>
              </SocialIcon>
              <SocialIcon label="LinkedIn">in</SocialIcon>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-semibold text-white">{column.title}</p>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

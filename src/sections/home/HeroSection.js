import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, SparklesIcon } from "@/assets/icons";

export function HeroSection() {
  return (
    <section id="get-started" className="relative overflow-hidden pb-0 pt-0">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_75%_at_50%_42%,#3730a3_0%,#2e1065_42%,#1d1045_78%,#120a28_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      ></div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />

      <div className="relative mx-auto max-w-[920px] px-4 pb-10 pt-[124px] text-center sm:px-6 sm:pb-14 sm:pt-[132px] md:pt-[148px] lg:px-8">
        <div className="inline-flex overflow-hidden rounded-full border border-white/15 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#6d28d9] text-white sm:h-11 sm:w-11">
            <SparklesIcon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
          </div>
          <div className="flex items-center bg-white/[0.07] px-4 backdrop-blur-sm sm:px-5">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/90 sm:text-xs">
              Call Tracking & Routing Platform
            </span>
          </div>
        </div>

        <h1 className="mt-10 text-balance font-sans text-[2.125rem] font-bold leading-[1.12] tracking-tight text-white sm:text-5xl sm:leading-[1.1] md:text-[3.35rem] lg:text-[3.5rem]">
          <span className="block">Track and Route Every Call</span>
          <span className="block">the Right Way</span>
        </h1>

        <p className="mx-auto mt-8 max-w-[560px] text-pretty font-mono text-[15px] leading-relaxed text-white/88 sm:text-base md:text-[17px] md:leading-8">
          See where your calls come from and automatically send them to the
          right team or agent.
        </p>

        <div className="mx-auto mt-11 flex max-w-xl flex-col items-stretch justify-center gap-4 sm:mt-12 sm:flex-row sm:items-center">
          <Link
            href="#pricing"
            className="group inline-flex items-center justify-between gap-4 rounded-full bg-white py-2 pl-9 pr-2 text-[15px] font-semibold text-brand-primary-dark shadow-[0_14px_40px_-18px_rgba(0,0,0,0.55)] transition hover:bg-white/95 sm:min-w-[260px]"
          >
            <span className="pl-1">Get Started</span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-200/95 text-brand-primary-dark transition group-hover:bg-violet-200">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Link>
          <Link
            href="#resources"
            className="group inline-flex items-center justify-between gap-4 rounded-full border border-violet-400/45 bg-[#2e1065]/45 py-2 pl-9 pr-2 text-[15px] font-semibold text-white shadow-inner shadow-black/10 backdrop-blur-sm transition hover:bg-[#2e1065]/65 sm:min-w-[260px]"
          >
            <span className="pl-1">Book Live Demo</span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-brand-primary-dark/85 text-white transition group-hover:bg-brand-primary-dark">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>

      <div className="relative mx-auto mt-4 max-w-[1180px] px-3 sm:mt-6 sm:px-5 lg:px-8">
        <div className="-mb-2 translate-y-6 select-none sm:translate-y-8 md:translate-y-10">
          <div className="relative overflow-hidden rounded-t-[22px] shadow-[0_40px_80px_-28px_rgba(0,0,0,0.65)] ring-1 ring-white/10">
            <Image
              src="/images/ribha-dashboard.png"
              alt="Ringba dashboard"
              width={3074}
              height={1197}
              priority
              sizes="(max-width: 1280px) 100vw, 1180px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

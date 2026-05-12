import { ArrowRight } from "lucide-react";

export function ProductHeroSection({ content }) {
  const BadgeIcon = content.badgeIcon;

  return (
    <section className="relative overflow-hidden bg-[#2a0066] px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-[55%] h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#c084fc]/40 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#5b0db8_0%,_#2a0066_45%,_#140028_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center text-center">
        <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-md">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-[#5f2bff]">
            <BadgeIcon size={12} strokeWidth={2.2} />
          </div>
          <span className="font-mono text-xs text-[#f3f3f3] sm:text-sm">
            {content.breadcrumb}
          </span>
        </div>

        <h1 className="max-w-3xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl">
          {content.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-5 max-w-2xl font-mono text-sm leading-relaxed text-[#f2f2f2] sm:text-base">
          {content.description}
        </p>

        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <button
            type="button"
            className="group inline-flex h-10 items-center gap-2.5 rounded-full bg-white px-5 text-sm font-medium text-[#5b2bff] transition hover:scale-[1.02]"
          >
            <span>{content.primaryCta}</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ede7ff]">
              <ArrowRight size={12} />
            </span>
          </button>

          <button
            type="button"
            className="group inline-flex h-10 items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-5 text-sm font-normal text-white backdrop-blur-md transition hover:bg-white/10"
          >
            <span>{content.secondaryCta}</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <ArrowRight size={12} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

import { ArrowDown } from "lucide-react";

export function ProductScaleBannerSection({ content }) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="relative mx-auto flex min-h-[420px] max-w-[1200px] items-center justify-center overflow-hidden rounded-[28px] bg-[#2a0066] px-6 py-16">
        <div className="absolute inset-0">
          <div className="absolute left-[-120px] top-[55%] h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#c084fc]/40 blur-[100px]" />
          <div className="absolute right-[-80px] top-[-80px] h-[280px] w-[280px] rounded-full bg-[#8b6bff]/35 blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#5b0db8_0%,_#2a0066_45%,_#140028_100%)]" />
        </div>

        <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {content.titleLines.map((line, index) => (
              <span
                key={line}
                className={index === content.titleLines.length - 1 ? "font-medium" : undefined}
              >
                {line}
                {index < content.titleLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </h2>

          <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-[#f2f2f2] sm:text-base">
            {content.description}
          </p>

          <button
            type="button"
            className="group mt-8 inline-flex h-10 items-center gap-3 rounded-full bg-white px-5 text-sm font-medium text-[#5b2bff] transition hover:scale-[1.02]"
          >
            <span>{content.cta}</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e8ddff]">
              <ArrowDown size={14} className="text-[#6a35ff]" strokeWidth={2.2} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

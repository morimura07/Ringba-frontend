export function ProductSolutionsSection({ content }) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#5B1EFF] sm:text-4xl">
              {content.heading}
            </h2>
            <p className="mt-4 font-mono text-sm leading-relaxed text-[#161616] sm:text-base">
              {content.description}
            </p>
          </div>

          <button
            type="button"
            className="group inline-flex h-10 min-w-[160px] items-center justify-between rounded-full bg-[#6C3BFF] pl-6 pr-1.5 text-sm font-medium text-white transition hover:bg-[#7445ff]"
          >
            <span>{content.cta}</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8155FF] transition group-hover:translate-y-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="M7 10l5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 rounded-[20px] bg-[#5B2CEB] p-6 shadow-[0_10px_40px_rgba(91,44,235,0.28)] md:grid-cols-3">
          {content.cards.map((card) => (
            <SolutionCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ card }) {
  const Icon = card.icon;

  return (
    <div className="relative flex min-h-[260px] flex-col items-center justify-center rounded-[16px] border border-white/45 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_100%)] text-center">
      <h3 className="absolute top-10 text-lg font-medium tracking-tight text-white sm:text-xl">
        {card.title}
      </h3>

      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-white">
        <div className="absolute inset-2 rounded-full border-2 border-white/90" />
        {card.variant === "network" ? (
          <NetworkIcon />
        ) : (
          <Icon size={40} strokeWidth={1.8} className="text-white" />
        )}
      </div>
    </div>
  );
}

function NetworkIcon() {
  return (
    <div className="relative h-14 w-14 animate-[spin_14s_linear_infinite]">
      {[
        "top-0 left-1/2 -translate-x-1/2",
        "top-[10px] right-0",
        "bottom-[10px] right-[2px]",
        "bottom-0 left-1/2 -translate-x-1/2",
        "bottom-[10px] left-[2px]",
        "top-[10px] left-0",
      ].map((position) => (
        <span
          key={position}
          className={`absolute ${position} h-3.5 w-3.5 rounded-full border-2 border-white bg-transparent`}
        />
      ))}
    </div>
  );
}

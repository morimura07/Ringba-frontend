export function ProductPerformanceSection({ content }) {
  const BadgeIcon = content.badgeIcon;

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px] rounded-[28px] border border-[#ececef] bg-[#f4f4f6] px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-12">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ded9ff]">
                <BadgeIcon size={15} className="text-[#5b2bff]" strokeWidth={2.3} />
              </div>
              <div className="rounded-lg bg-[#efeff1] px-3 py-2 font-mono text-sm text-[#4c11cc]">
                {content.badge}
              </div>
            </div>

            <h2 className="max-w-sm text-3xl font-normal leading-tight tracking-tight text-[#2b0077] sm:text-4xl">
              {content.heading}
            </h2>

            <p className="mt-6 max-w-md font-mono text-sm leading-relaxed text-[#4d4d55] sm:text-base">
              {content.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {content.cards.map((card) => (
              <PerformanceCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PerformanceCard({ card }) {
  const Icon = card.icon;

  return (
    <div className="rounded-[20px] border border-white/60 bg-[#ececef] p-6 sm:p-7">
      <div className="mb-8">
        <Icon size={26} className="text-[#5b2bff]" strokeWidth={1.8} />
      </div>

      <h3 className="whitespace-pre-line text-xl font-normal leading-snug tracking-tight text-[#202028] sm:text-2xl">
        {card.title}
      </h3>

      <p className="mt-4 max-w-[290px] font-mono text-sm leading-relaxed text-[#64646d]">
        {card.description}
      </p>
    </div>
  );
}

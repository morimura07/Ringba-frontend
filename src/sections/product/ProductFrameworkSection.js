export function ProductFrameworkSection({ content }) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-10 text-center text-3xl font-medium tracking-tight text-[#3B0CA3] sm:mb-12 sm:text-4xl">
          {content.heading}
        </h2>

        <FrameworkGrid cards={content.cards} />
      </div>
    </section>
  );
}

function FrameworkGrid({ cards }) {
  return (
    <div className="rounded-[24px] bg-[#D9D9D9] px-6 py-8 sm:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <FrameworkCard key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
}

function FrameworkCard({ card }) {
  const Icon = card.icon;

  return (
    <div className="flex min-h-[280px] flex-col items-center rounded-[20px] bg-[#E7E7EB] px-6 pb-8 pt-10">
      <h3 className="text-center text-xl font-medium text-[#2F0A8C]">{card.title}</h3>
      <p className="mt-4 max-w-[260px] text-center font-mono text-sm leading-relaxed text-[#5B5B5B]">
        {card.description}
      </p>
      <div className="mt-auto flex h-24 items-center justify-center pt-8 text-[#3B0CA3]">
        <Icon size={72} strokeWidth={1.8} />
      </div>
    </div>
  );
}

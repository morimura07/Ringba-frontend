import Image from "next/image";

export function ProductCapabilitiesSection({ content }) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-[#5B2EFF]" />
          <div className="rounded-lg border border-[#D9D9D9] bg-[#F4F4F4] px-4 py-2 font-mono text-sm text-[#2F0A8C]">
            {content.badge}
          </div>
        </div>

        <h2 className="mb-12 text-center text-3xl font-medium tracking-tight text-[#2F0A8C] sm:mb-14 sm:text-4xl">
          {content.heading}
        </h2>

        <div className="flex flex-col gap-8">
          {content.cards.map((card) => (
            <CapabilityCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ card }) {
  return (
    <div className="flex flex-col items-center justify-between gap-8 rounded-[28px] bg-[#D9D9D9] px-6 py-8 sm:px-8 lg:flex-row">
      <div className="w-full max-w-xl">
        <h3 className="mb-5 text-2xl font-normal leading-tight tracking-tight text-[#2F0A8C] sm:text-3xl">
          {card.title}
        </h3>
        <p className="font-mono text-sm leading-relaxed text-[#5A5A5A] sm:text-base">
          {card.description}
        </p>
      </div>
      <div className="flex w-full max-w-md items-center justify-center rounded-[20px] bg-[#E7E7EB] p-4">
        <Image
          src={card.image}
          alt={card.title}
          width={840}
          height={560}
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}

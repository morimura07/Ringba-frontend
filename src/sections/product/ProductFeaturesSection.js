export function ProductFeaturesSection({ content }) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-[#5A22EA]" />
          <div className="rounded-lg border border-[#DDDDDD] bg-white px-4 py-2 font-mono text-sm text-[#2F0A8C]">
            {content.badge}
          </div>
        </div>

        <h2 className="mx-auto max-w-3xl text-center text-3xl font-medium leading-tight tracking-tight text-[#2F0A8C] sm:text-4xl">
          {content.heading}
        </h2>

        <p className="mx-auto mt-6 mb-12 max-w-3xl text-center font-mono text-sm leading-relaxed text-[#232323] sm:mb-14 sm:text-base">
          {content.description}
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.items.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <div className="min-h-[280px] rounded-[20px] bg-[#D9D9D9] px-5 pb-7 pt-5">
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#3B0A8E] text-white">
        <Icon size={24} strokeWidth={2.2} />
      </div>
      <h3 className="mb-4 text-xl font-normal leading-snug tracking-tight text-[#202020] sm:text-2xl">
        {feature.title}
      </h3>
      <p className="font-mono text-sm leading-relaxed text-[#666666]">
        {feature.description}
      </p>
    </div>
  );
}

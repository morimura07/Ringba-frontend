import { ArrowRight, Layers } from "lucide-react";
import { productCards } from "@/constants/home";
import { Card } from "@/components/ui/Card";
import {
  Section,
  SectionContainer,
  SectionDescription,
  SectionHeader,
  SectionHeading,
} from "@/components/ui/Section";

function ProductCard({ icon: Icon, title, description }) {
  return (
    <Card variant="product" className="flex h-full flex-col items-start">
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-[#e0d4ff] to-[#f3f0ff] p-4">
        <Icon className="h-7 w-7 text-brand-primary" />
      </div>
      <h3 className="mb-4 text-2xl font-bold text-brand-deep">{title}</h3>
      <p className="mb-8 flex-grow text-[15px] font-medium leading-relaxed text-brand-muted opacity-80">
        {description}
      </p>
      <button type="button" className="group flex items-center gap-2 text-sm font-bold text-brand-primary">
        Learn More
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </button>
    </Card>
  );
}

export function ProductExplorationSection() {
  return (
    <Section id="products" className="rounded-[48px] bg-[#eff1f3]">
      <SectionContainer size="xl">
        <SectionHeader>
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-primary">
            <Layers size={16} />
            Product
          </div>
          <SectionHeading>
            Explore Our <span className="text-brand-primary">Products</span>
          </SectionHeading>
          <SectionDescription className="font-mono opacity-80">
            See everything you can do in one place
          </SectionDescription>
        </SectionHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {productCards.slice(0, 3).map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {productCards.slice(3).map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
}

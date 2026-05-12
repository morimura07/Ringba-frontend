"use client";

import { pricingPlans } from "@/constants/pricing";
import { useToggle } from "@/hooks/useToggle";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, SectionContainer, SectionHeading } from "@/components/ui/Section";

export function PricingSection() {
  const { value: yearly, toggle } = useToggle(false);

  return (
    <Section id="pricing" className="bg-white">
      <SectionContainer>
        <SectionHeading className="text-center">Platform Pricing</SectionHeading>

        <div className="mt-10 flex items-center justify-center gap-3 text-sm font-medium text-gray-600">
          <span className={!yearly ? "text-gray-900" : undefined}>Monthly</span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            onClick={toggle}
            className="relative inline-flex h-8 w-14 shrink-0 items-center rounded-full border border-gray-200 bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-dark focus-visible:ring-offset-2"
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition ${
                yearly ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button>
          <span className={yearly ? "text-gray-900" : undefined}>Yearly</span>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const price = yearly ? plan.yearly : plan.monthly;
            const suffix = yearly ? "/yr" : "/mo";

            return (
              <Card
                key={plan.name}
                className={`flex flex-col p-8 ${
                  plan.highlighted
                    ? "border-brand-primary-dark bg-violet-50/40 ring-1 ring-brand-primary-dark/20"
                    : ""
                }`}
              >
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    ${price}
                  </span>
                  <span className="text-gray-500">{suffix}</span>
                </p>
                <Button href="#get-started" className="mt-8 w-full">
                  Get Started
                </Button>
                <ul className="mt-10 flex flex-col gap-3 text-sm text-gray-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span
                        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary-dark/10 text-brand-primary-dark"
                        aria-hidden
                      >
                        <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <path
                            d="M2 6l3 3 5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="#get-started">View All</Button>
        </div>
      </SectionContainer>
    </Section>
  );
}

"use client";

import { useState } from "react";
import { faqItems } from "@/constants/faq";
import { Section, SectionContainer, SectionHeading } from "@/components/ui/Section";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="resources" className="bg-[#f9fafb]">
      <SectionContainer size="sm">
        <SectionHeading className="text-center text-brand-primary-dark">
          Everything You Need to Know
        </SectionHeading>
        <div className="mt-12 space-y-3">
          {faqItems.map((item, index) => {
            const open = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-gray-900 transition hover:bg-gray-50"
                  aria-expanded={open}
                >
                  {item.question}
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 text-lg leading-none text-gray-500"
                    aria-hidden
                  >
                    {open ? "−" : "+"}
                  </span>
                </button>
                {open ? (
                  <div className="border-t border-gray-100 px-5 py-4 text-sm leading-relaxed text-gray-600">
                    {item.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </Section>
  );
}

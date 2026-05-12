"use client";

import { Eye, GitBranch, LayoutTemplate, Plus, Target } from "lucide-react";
import { reportingShowcase } from "@/constants/home";
import { Card } from "@/components/ui/Card";
import {
  Section,
  SectionContainer,
  SectionDescription,
  SectionHeader,
  SectionHeading,
} from "@/components/ui/Section";

export function CallManagementSection() {
  return (
    <Section className="bg-brand-surface py-20 text-[#1a1a1a]">
      <SectionContainer size="xl">
        <SectionHeader>
          <div className="mb-6 flex items-center gap-2 rounded-full border border-purple-100 bg-white px-3 py-1 shadow-sm">
            <Eye size={16} className="text-purple-600" />
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">
              Feature Showcase
            </span>
          </div>
          <SectionHeading className="mb-6 text-5xl tracking-tighter md:text-6xl lg:text-7xl">
            Real-Time <span className="text-brand-accent">Call Management</span> and Reporting
          </SectionHeading>
          <SectionDescription className="mx-auto max-w-2xl text-center text-lg md:text-xl">
            Your time is valuable - never wait again. View group, filter, sort, manipulate, and export your data instantly at unlimited scale.
          </SectionDescription>
        </SectionHeader>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card variant="showcase" className="group relative flex h-[400px] flex-col overflow-hidden">
            <h3 className="mb-6 text-lg font-bold">Reporting</h3>
            <div className="flex-1 translate-y-4 rounded-xl bg-white p-4 shadow-xl transition-transform duration-500 group-hover:translate-y-2">
              <div className="space-y-3">
                {reportingShowcase.reportingRows.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between rounded-lg border border-gray-50 p-3 ${item.nested ? "ml-8 bg-gray-50/50" : "bg-white"}`}
                  >
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-tighter text-gray-400">
                        {item.label}
                      </p>
                      <p className="text-[10px] text-gray-400">{item.date}</p>
                    </div>
                    <Plus size={14} className="text-purple-500" />
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card variant="showcase" className="group relative flex h-[400px] flex-col overflow-hidden">
            <div className="flex-1 translate-y-4 rounded-xl bg-white p-6 shadow-xl transition-transform duration-500 group-hover:translate-y-2">
              <h3 className="mb-6 text-sm font-bold">Routing Summary</h3>
              <div className="relative mb-6 h-32 w-full">
                <svg viewBox="0 0 200 100" className="h-full w-full">
                  <path
                    d="M0,80 Q25,70 40,45 T80,40 T120,20 T160,50 T200,30"
                    fill="none"
                    stroke="#8B80FF"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,80 Q25,70 40,45 T80,40 T120,20 T160,50 T200,30 V100 H0 Z"
                    fill="url(#grad)"
                    opacity="0.1"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#5D51E8" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  {[0, 40, 80, 120, 160, 200].map((x, index) => (
                    <circle
                      key={x}
                      cx={x}
                      cy={index % 2 === 0 ? 40 : 20}
                      r="2"
                      fill="#5D51E8"
                    />
                  ))}
                  <line x1="0" y1="90" x2="200" y2="90" stroke="#5D51E8" strokeWidth="1" />
                </svg>
              </div>
              <div className="space-y-2">
                <p className="mb-2 text-[10px] font-bold text-gray-400">TOP PERFORMERS</p>
                {reportingShowcase.topPerformers.map((row) => (
                  <div
                    key={row.name}
                    className="flex justify-between text-[10px] font-medium text-gray-600"
                  >
                    <span>{row.name}</span>
                    <span>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card variant="showcase" className="group relative flex h-[400px] flex-col overflow-hidden">
            <div className="flex-1 translate-y-4 rounded-xl bg-white p-6 shadow-xl transition-transform duration-500 group-hover:translate-y-2">
              <h3 className="mb-6 text-sm font-bold">Targets</h3>
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="border-b border-gray-50 font-bold text-gray-400">
                    <th className="pb-2 text-left">NAME</th>
                    <th className="pb-2 text-left">LIVE</th>
                    <th className="pb-2 text-left">HOUR</th>
                    <th className="pb-2 text-right">STATUS</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {reportingShowcase.targets.map((row) => (
                    <tr key={row.name} className="border-b border-gray-50 last:border-0">
                      <td className="py-4 font-medium">{row.name}</td>
                      <td className="py-4">{row.live}</td>
                      <td className="py-4">{row.hour}</td>
                      <td className="py-4 text-right">
                        <div className={`inline-block h-2.5 w-2.5 rounded-full ${row.statusColor}`} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { icon: LayoutTemplate, title: "Reporting", copy: "Track performance with clear insights." },
            { icon: GitBranch, title: "Routing", copy: "Direct calls with precision and control." },
            { icon: Target, title: "Targets", copy: "Set limits and control your call flow." },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <div className="mb-3 flex items-center gap-2">
                <item.icon size={20} className="text-brand-accent" />
                <h4 className="text-xl font-bold">{item.title}</h4>
              </div>
              <p className="font-mono text-sm text-gray-500">{item.copy}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </Section>
  );
}

// components/OurVisionMissionPremium.js
"use client";

import { Target, Rocket, ShieldCheck, LineChart } from "lucide-react";

export default function OurVisionMissionPremium() {
    return (
        <section className="relative overflow-hidden">
            {/* soft gradient halos (behind) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-br from-[#115D8E]/18 to-[#046eb4]/18 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-[#046eb4]/18 to-[#115D8E]/18 blur-3xl" />
            </div>

            <div className="container mx-auto px-6 md:px-10 lg:px-14 py-16 md:py-24">
                {/* header */}
                <div className="mb-12 md:mb-16">
                    <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs md:text-sm">
                        Our Vision & Mission
                    </span>
                    <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                        Purpose-led.{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#115D8E] to-[#046eb4]">
                            Outcome-driven.
                        </span>
                    </h2>
                    <p className="mt-4 max-w-3xl text-gray-600">
                        We fuse strategy, design, and engineering so every initiative ships
                        fast, scales safely, and delights customers.
                    </p>
                </div>

                {/* asymmetrical cards */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
                    {/* Vision — tall feature card */}
                    <div className="lg:col-span-3">
                        <GradientCard>
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#115D8E]/15 to-[#046eb4]/15 ring-1 ring-[#115D8E]/20">
                                    <Target className="h-6 w-6 text-[#115D8E]" />
                                </div>
                                <Badge>Vision</Badge>
                            </div>

                            <h3 className="mt-5 text-2xl sm:text-3xl font-extrabold">
                                Creating connections through impactful experiences
                            </h3>
                            <p className="mt-3 text-gray-600">
                            We prototype, validate, and launch quickly—then iterate with
                                data and customer insight. We prototype, validate, and launch
                                quickly—then iterate with data and customer insight. We
                                prototype, validate, and launch quickly—then iterate with data
                                and customer insight. We prototype, validate, and launch
                                quickly—then iterate with data and customer insight. We
                                prototype, validate, and launch quickly—then iterate with data
                                and customer insight. We prototype, validate, and launch
                                quickly—then iterate with data and customer insight.
                            </p>

                            {/* bottom chips */}
                            <div className="mt-7 flex flex-wrap gap-2">
                                <Chip icon={<ShieldCheck className="h-3.5 w-3.5" />}>
                                    Secure by design
                                </Chip>
                                <Chip icon={<LineChart className="h-3.5 w-3.5" />}>
                                    Measurable impact
                                </Chip>
                            </div>
                        </GradientCard>
                    </div>

                    {/* Mission — split stack */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        <GradientCard compact>
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#115D8E]/15 to-[#046eb4]/15 ring-1 ring-[#115D8E]/20">
                                    <Rocket className="h-6 w-6 text-[#046eb4]" />
                                </div>
                                <Badge>Mission</Badge>
                            </div>

                            <h3 className="mt-5 text-2xl font-extrabold">
                                Turn bold ideas into results
                            </h3>
                            <p className="mt-3 text-gray-600">
                                We prototype, validate, and launch quickly—then iterate with
                                data and customer insight. We prototype, validate, and launch
                                quickly—then iterate with data and customer insight. We
                                prototype, validate, and launch quickly—then iterate with data
                                and customer insight. We prototype, validate, and launch
                                quickly—then iterate with data and customer insight. We
                                prototype, validate, and launch quickly—then iterate with data
                                and customer insight. We prototype, validate, and launch
                                quickly—then iterate with data and customer insight.
                            </p>
                        </GradientCard>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- pieces ---------- */

function GradientCard({ children, compact = false }) {
    return (
        <div className="relative rounded-3xl border border-gray-200 bg-white shadow-sm h-100">
            {/* premium gradient top stripe */}
            <div className="absolute inset-x-0 -top-px h-1 rounded-t-3xl bg-gradient-to-r from-[#115D8E] to-[#046eb4]" />
            <div className={`p-6 sm:p-8 ${compact ? "pb-6" : "pb-8"}`}>
                {children}
            </div>
            {/* corner glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -right-4 -bottom-4 h-20 w-20 rounded-full bg-gradient-to-tr from-[#115D8E]/15 to-[#046eb4]/15 blur-md"
            />
        </div>
    );
}

function Badge({ children }) {
    return (
        <span className="text-xs font-medium rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
            {children}
        </span>
    );
}

function Chip({ children, icon }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-700">
            {icon}
            {children}
        </span>
    );
}

function Stat({ value, label }) {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
            {/* gradient ring accent */}
            <div
                aria-hidden
                className="absolute inset-x-0 -top-px h-0.5 bg-gradient-to-r from-[#115D8E] to-[#046eb4]"
            />
            <div className="text-2xl font-extrabold text-[#115D8E]">{value}</div>
            <div className="mt-0.5 text-xs text-gray-600">{label}</div>
        </div>
    );
}

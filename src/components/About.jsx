import React from "react";

function About() {
    return (
        <div name="about" className="relative w-full py-32">
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-100 via-white to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
            <div className="absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)] bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.18),transparent_60%)]" />
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-6xl font-extrabold brand-gradient-text drop-shadow-sm">
                        About Me
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-10 items-start">
                    <div className="md:col-span-2 rounded-3xl p-2 md:p-4">
                        <div className="prose prose-slate dark:prose-invert prose-lg max-w-none leading-relaxed">
                            <p>
                                Curious about how a single click fans out across
                                networks, services and UI layers? That systems
                                curiosity pulled me into engineering—first via
                                front-end craft, now across cloud infrastructure
                                and platform reliability.
                            </p>
                            <p>
                                I started at Haldia Institute of Technology
                                (Electronics & Communication) and expanded into
                                C/C++, JavaScript and Python—tools that let
                                ideas become tangible, interactive products.
                            </p>
                            <p>
                                Today I'm focused on Azure: codifying
                                infrastructure (Bicep/Terraform), orchestrating
                                containers (AKS), enabling serverless patterns,
                                shaping CI/CD pipelines and enforcing DevSecOps
                                guardrails.
                            </p>
                            <p>
                                I care about performance budgets,
                                accessibility-first design and observability
                                that shortens the feedback loop. Resilience and
                                user empathy are equal pillars.
                            </p>
                            <p>
                                Open to collaborating on products that blend UX
                                finesse with sound cloud architecture.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <span className="badge">Azure</span>
                            <span className="badge">AKS</span>
                            <span className="badge">DevSecOps</span>
                            <span className="badge">IaC</span>
                            <span className="badge">Terraform</span>
                            <span className="badge">Bicep</span>
                            <span className="badge">Monitoring</span>
                            <span className="badge">Performance</span>
                        </div>
                    </div>
                    <div className="space-y-10">
                        <div className="rounded-3xl p-2 md:p-4">
                            <h3 className="font-semibold tracking-wide text-sm text-slate-600 dark:text-slate-300 mb-3 uppercase">
                                Focus Areas
                            </h3>
                            <ul className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 list-disc pl-5">
                                <li>Cloud-native architectures</li>
                                <li>Scalable CI/CD pipelines</li>
                                <li>Cost & performance tuning</li>
                                <li>Security & compliance automation</li>
                                <li>Observability & SRE practices</li>
                            </ul>
                        </div>
                        <div className="rounded-3xl p-2 md:p-4">
                            <h3 className="font-semibold tracking-wide text-sm text-slate-600 dark:text-slate-300 mb-3 uppercase">
                                Principles
                            </h3>
                            <ul className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 list-disc pl-5">
                                <li>Empathy-driven UX & DX</li>
                                <li>Automate repeatable toil</li>
                                <li>Fail fast, learn safely</li>
                                <li>Defense-in-depth mindset</li>
                                <li>Measure, then optimize</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

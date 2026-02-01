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
                                I am a Cloud & Infrastructure Engineer with hands-on experience in Azure Monitor and Application Insights.
                            </p>
                            <p>
                                My daily work involves checking how systems behave in real time. I monitor performance, availability, telemetry data, logs, and costs. When issues happen, I analyze data to find the root cause and help prevent repeat incidents.
                            </p>
                            <p>
                                I also have a background in full-stack development. This helps me understand applications as well as infrastructure, which leads to better monitoring and troubleshooting.
                            </p>
                            <p>
                                I enjoy working on systems that are reliable, simple, and well understood.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <span className="badge">Azure Monitor</span>
                            <span className="badge">Application Insights</span>
                            <span className="badge">Telemetry</span>
                            <span className="badge">Observability</span>
                            <span className="badge">Performance</span>
                            <span className="badge">Availability</span>
                            <span className="badge">Cost Management</span>
                            <span className="badge">Root Cause Analysis</span>
                        </div>
                    </div>
                    <div className="space-y-10">
                        <div className="rounded-3xl p-2 md:p-4">
                            <h3 className="font-semibold tracking-wide text-sm text-slate-600 dark:text-slate-300 mb-3 uppercase">
                                What I Focus On
                            </h3>
                            <ul className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 list-disc pl-5">
                                <li>Cloud Monitoring & Observability</li>
                                <li>Performance & Availability</li>
                                <li>Telemetry & Application Insights</li>
                                <li>Cost Awareness</li>
                                <li>Root Cause Analysis</li>
                            </ul>
                        </div>
                        <div className="rounded-3xl p-2 md:p-4">
                            <h3 className="font-semibold tracking-wide text-sm text-slate-600 dark:text-slate-300 mb-3 uppercase">
                                How I Work
                            </h3>
                            <ul className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 list-disc pl-5">
                                <li>Prefer clarity over complexity</li>
                                <li>Rely on data, not assumptions</li>
                                <li>Learn continuously</li>
                                <li>Improve systems step by step</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

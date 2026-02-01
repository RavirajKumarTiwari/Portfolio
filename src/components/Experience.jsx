import React from "react";

function Experience() {
    const skillCategories = [
        {
            title: "Cloud & Monitoring",
            skills: ["Azure Monitor", "Application Insights", "Metrics", "Logs", "Traces", "Performance Monitoring", "Availability Monitoring", "Azure Cost Management", "Root Cause Analysis"]
        },
        {
            title: "Development",
            skills: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "C", "C++", "HTML", "CSS", "Tailwind CSS"]
        },
        {
            title: "Tools",
            skills: ["Git", "GitHub", "VS Code"]
        }
    ];

    return (
        <div name="experience" className="relative w-full">
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-50 via-white to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
            <div className="absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)] bg-[radial-gradient(circle_at_25%_25%,rgba(34,211,238,0.16),transparent_60%),radial-gradient(circle_at_75%_70%,rgba(59,130,246,0.18),transparent_60%)]" />
            
            {/* Experience Section */}
            <div className="max-w-6xl mx-auto px-6 py-32">
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-6xl font-extrabold brand-gradient-text drop-shadow-sm">
                        Experience
                    </h2>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-3xl p-6 md:p-8 bg-white/70 dark:bg-slate-800/60 backdrop-blur-md ring-1 ring-slate-200 dark:ring-slate-700 shadow-lg">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                            Cloud & Infrastructure Engineer
                        </h3>
                        <p className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mb-1">
                            LTIMindtree | Client: Honeywell (Lenel Support – CIS-FMB)
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                            Feb 2025 – Present
                        </p>
                        <div className="prose prose-slate dark:prose-invert prose-lg max-w-none leading-relaxed">
                            <p>
                                I work as a Cloud & Infrastructure Engineer supporting Honeywell Lenel Physical Access Control Systems, where reliability and availability are critical.
                            </p>
                            <p>
                                My role focuses on continuous monitoring and operational support using Azure Monitor and Azure Log Analytics. I regularly track system performance and availability to ensure stable operations across large-scale enterprise environments.
                            </p>
                            <p>
                                I analyze telemetry data, metrics, and logs to identify anomalies, investigate incidents, and support effective Root Cause Analysis (RCA). This includes monitoring CPU, memory, network usage, HTTP requests, and failure patterns to reduce downtime and improve recovery times.
                            </p>
                            <p>
                                I collaborate closely with development, security, and operations teams to improve system stability, follow ITIL-based processes, and maintain compliance standards. I also create and maintain technical documentation, SOPs, and operational workflows to standardize support and improve efficiency.
                            </p>
                            <p>
                                This role has given me strong hands-on exposure to real-world cloud monitoring, incident management, and enterprise production support.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Skills Section */}
            <div className="max-w-6xl mx-auto px-6 py-32">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-extrabold brand-gradient-text drop-shadow-sm">
                        Skills
                    </h2>
                    <p className="mt-5 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Cloud monitoring, development, and tools I work with daily.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="rounded-3xl p-6 md:p-8 bg-white/70 dark:bg-slate-800/60 backdrop-blur-md ring-1 ring-slate-200 dark:ring-slate-700">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                                {category.title}
                            </h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="flex items-start">
                                        <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 mr-3 flex-shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300">
                                            {skill}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;

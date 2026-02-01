import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

function Home() {
    const [allowAnimation, setAllowAnimation] = useState(true);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (mq.matches) setAllowAnimation(false);
        const handler = () => setAllowAnimation(!mq.matches);
        mq.addEventListener
            ? mq.addEventListener("change", handler)
            : mq.addListener(handler);
        return () => {
            mq.removeEventListener
                ? mq.removeEventListener("change", handler)
                : mq.removeListener(handler);
        };
    }, []);
    return (
        <div
            name="home"
            className="relative h-screen w-full overflow-hidden pt-28 md:pt-32"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.18),transparent_55%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.15),transparent_55%)]" />
            <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-50 via-white to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-6 gap-14">
                <div className="flex flex-col justify-center max-w-3xl text-center">
                    <p className="uppercase tracking-[0.3em] text-[10px] font-semibold text-cyan-600/90 dark:text-cyan-400/90 mb-4">
                        Cloud & Infrastructure Engineer at LTIMindtree
                    </p>
                    <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight brand-gradient-text drop-shadow-sm">
                        Building Scalable Azure Cloud Solutions
                    </h1>
                    {allowAnimation ? (
                        <TypeAnimation
                            sequence={[
                                "Cloud Monitoring & Observability",
                                1600,
                                "Performance & Availability Tracking",
                                1600,
                                "Telemetry & Application Insights Analysis",
                                1600,
                                "Cost Awareness & Optimization",
                                1600,
                                "Root Cause Analysis & Incident Resolution",
                                1600,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            className="text-slate-600 dark:text-slate-400 mt-6 text-base sm:text-lg max-w-xl"
                        />
                    ) : (
                        <p className="text-slate-600 dark:text-slate-400 mt-6 text-base sm:text-lg max-w-xl">
                            Monitoring • Observability • Performance • Telemetry • Cost Awareness
                        </p>
                    )}
                    <div className="mt-10 flex flex-wrap gap-4 justify-center">
                        <Link
                            to="about"
                            smooth
                            duration={500}
                            className="pill-btn pill-btn-primary motion-soft"
                        >
                            <span className="flex items-center">
                                Learn More{" "}
                                <MdKeyboardArrowRight
                                    size={22}
                                    className="ml-1 -mr-1 motion-soft"
                                />
                            </span>
                        </Link>
                        <Link
                            to="contact"
                            smooth
                            duration={500}
                            className="pill-btn pill-btn-outline motion-soft"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <HeroTerminal />
            </div>
        </div>
    );
}

export default Home;

function HeroTerminal() {
    const [uptime, setUptime] = useState(0);
    const [scale, setScale] = useState(1);
    useEffect(() => {
        const start = Date.now();
        const id = setInterval(() => {
            setUptime(Math.floor((Date.now() - start) / 1000));
        }, 1000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            const max = 400; // distance over which we animate
            const ratio = Math.min(y / max, 1);
            // scale down slightly as user scrolls away (1 -> 0.92)
            setScale(1 - ratio * 0.08);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const fun = [
        "Developing web applications...",
        "Deploying infrastructure...",
        "Monitoring on cloud systems...",
        "Monitoring system health... stable",
        "Analyzing performance metrics... optimized",
        "Processing telemetry data... complete",
        "Root cause analysis... resolved",
    ];
    const msg = fun[uptime % fun.length];

    return (
        <div
            className="font-mono text-left w-full max-w-3xl text-[13px] leading-relaxed transition-transform duration-300 ease-out"
            style={{ transform: `scale(${scale})` }}
        >
            <div className="flex items-center gap-2 mb-2 text-slate-500 dark:text-slate-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>session: live</span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span>uptime {uptime}s</span>
            </div>
            <pre className="whitespace-pre-wrap text-slate-700 dark:text-slate-300">
                {`> whoami\n  raviraj (fullstack_engineer)\n\n> focus\n  Development, Deployment and Maintenance of Cloud systems that stay available, observable, & cost-efficient.\n\n> status\n  ${msg}\n\n> work\n  [M] monitoring  [O] observability  [C] cost  [Q] quit\n`}
            </pre>
        </div>
    );
}

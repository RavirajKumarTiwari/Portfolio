import React from "react";
import Todo from "../assets/Todo.jpg";
import password from "../assets/password.jpg";
import weather from "../assets/weather.jpg";
import spotify from "../assets/spotify.png";
import blogging from "../assets/blogging.png";
import virat from "../assets/virat.png";

function Portfolio() {
    const portfolios = [
        {
            id: 1,
            src: Todo,
            name: "Todo List",
            link: "https://github.com/RavirajKumarTiwari/React_To-Do_List",
        },
        {
            id: 2,
            src: password,
            name: "Password Generator",
            link: "https://github.com/RavirajKumarTiwari/Password-Generator",
        },
        {
            id: 3,
            src: weather,
            name: "Weather App",
            link: "https://github.com/RavirajKumarTiwari/Weather-App",
        },
        {
            id: 4,
            src: spotify,
            name: "Spotify Clone",
            link: "https://github.com/RavirajKumarTiwari/Spotify-Clone",
        },
        {
            id: 5,
            src: blogging,
            name: "Blogging Website",
            link: "https://github.com/RavirajKumarTiwari/Blog",
        },
        {
            id: 6,
            src: virat,
            name: "Kohli Analysis",
            link: "https://github.com/RavirajKumarTiwari/Kohli-Analysis",
        },
    ];

    return (
        <div name="portfolio" className="relative w-full py-32">
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-50 via-white to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
            <div className="absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(34,211,238,0.15),rgba(59,130,246,0.15),transparent_55%)]" />
            <div className="max-w-7xl px-6 md:px-12 mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-extrabold brand-gradient-text drop-shadow-sm mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Curated work highlighting experimentation in
                        interaction, performance, accessibility and visual
                        polish.
                    </p>
                </div>
                <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
                    {portfolios.map(({ id, src, name, link }) => (
                        <div
                            key={id}
                            className="group rounded-[1.75rem] p-1 flex flex-col motion-soft"
                        >
                            <div className="relative overflow-hidden rounded-[1.25rem] aspect-[4/3] mb-6 ring-1 ring-slate-300/40 dark:ring-slate-600/40 bg-slate-200/40 dark:bg-slate-700/30">
                                <img
                                    src={src}
                                    alt={name}
                                    loading="lazy"
                                    decoding="async"
                                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                                    className="absolute inset-0 w-full h-full object-cover scale-[1.02] group-hover:scale-[1.09] transition duration-[1400ms] ease-[cubic-bezier(.19,1,.22,1)] motion-soft"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition" />
                                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                                    <h3 className="text-lg font-semibold text-white drop-shadow-sm tracking-wide">
                                        {name}
                                    </h3>
                                </div>
                            </div>
                            <div className="mt-auto flex items-center justify-between pt-4">
                                <button
                                    onClick={() => window.open(link, "_blank")}
                                    className="pill-btn pill-btn-primary text-sm px-5 py-2 shadow-none"
                                >
                                    Source
                                </button>
                                <span className="text-[10px] tracking-[0.25em] uppercase text-cyan-500/80 dark:text-cyan-300/80 font-semibold">
                                    Open
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;

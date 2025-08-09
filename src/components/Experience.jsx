import React from "react";
import c_img from "../assets/c_img.png";
import css_img from "../assets/css_img.png";
import html_img from "../assets/html_img.png";
import react_img from "../assets/react_img.png";
import mysql_img from "../assets/mysql_img.png";
import tailwind_img from "../assets/tailwind_img.png";
import github_img from "../assets/github_img.png";
import python_img from "../assets/python_img.png";
import jsvascript_icon from "../assets/javascript_icon.png";
import git_img from "../assets/git_img.png";
import postman_img from "../assets/postman_img.png";

function Experience() {
    const techs = [
        { id: 1, src: c_img, alt: "c_img", title: "C++" },
        { id: 2, src: jsvascript_icon, alt: "js_img", title: "JavaScript" },
        { id: 3, src: python_img, alt: "python_img", title: "Python" },
        { id: 4, src: html_img, alt: "html_img", title: "HTML" },
        { id: 5, src: css_img, alt: "css_img", title: "CSS" },
        { id: 6, src: react_img, alt: "react_img", title: "React" },
        { id: 7, src: mysql_img, alt: "mysql_img", title: "MySQL" },
        { id: 8, src: tailwind_img, alt: "tailwind_img", title: "Tailwind" },
        { id: 9, src: git_img, alt: "git_img", title: "Git" },
        { id: 10, src: github_img, alt: "github_img", title: "GitHub" },
        { id: 11, src: postman_img, alt: "postman_img", title: "Postman" },
    ];

    return (
        <div name="experience" className="relative w-full py-32">
            <div className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-50 via-white to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
            <div className="absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)] bg-[radial-gradient(circle_at_25%_25%,rgba(34,211,238,0.16),transparent_60%),radial-gradient(circle_at_75%_70%,rgba(59,130,246,0.18),transparent_60%)]" />
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-extrabold brand-gradient-text drop-shadow-sm">
                        Tech Stack
                    </h2>
                    <p className="mt-5 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Tools & technologies shaping my current approach to
                        performance, accessibility and delightful
                        micro-interaction.
                    </p>
                </div>
                <div className="grid gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {techs.map(({ id, src, alt, title }) => (
                        <div
                            key={id}
                            className="group rounded-2xl p-3 flex flex-col items-center motion-soft"
                        >
                            <div className="relative w-24 h-24 flex items-center justify-center rounded-xl ring-1 ring-slate-300/50 dark:ring-slate-600/40 bg-slate-100/60 dark:bg-slate-800/40">
                                <img
                                    src={src}
                                    alt={alt}
                                    className="w-20 h-20 object-contain drop-shadow-sm transition group-hover:scale-105"
                                />
                            </div>
                            <p className="mt-4 text-sm font-medium tracking-wide text-slate-700 dark:text-slate-200">
                                {title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;

import React from "react";
import c_img from "../assets/c_img.png";
import css_img from "../assets/css_img.jpg";
import html_img from "../assets/html_img.jpg";
import js_img from "../assets/js_img.png";
import react_img from "../assets/react_img.jpg";
import mysql_img from "../assets/mysql_img.png";
import tailwind_img from "../assets/tailwind_img.jpg";
import github_img from "../assets/github_img.jpg";

function Experience() {

    const techs = [
        {
            id: 1,
            src: c_img,
            alt: "c_img",
            title: "C++",
            style: "shadow-blue-600",
        },
        {
            id: 2,
            src: js_img,
            alt: "js_img",
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 3,
            src: html_img,
            alt: "html_img",
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 4,
            src: css_img,
            alt: "css_img",
            title: "CSS",
            style: "shadow-blue-600",
        },
        {
            id: 5,
            src: react_img,
            alt: "react_img",
            title: "React JS",
            style: "shadow-blue-600",
        },
        {
            id: 6,
            src: mysql_img,
            alt: "mysql_img",
            title: "MySQL",
            style: "shadow-orange-800",
        },
        {
            id: 7,
            src: tailwind_img,
            alt: "tailwind_img",
            title: "Tailwind CSS",
            style: "shadow-sky-400",
        },
        {
            id: 8,
            src: github_img,
            alt: "github_img",
            title: "GitHub",
            style: "shadow-gray-400",
        },
    ];

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Experience
                    </p>
                    <p className="py-6">
                        These are the technologies I've worked with
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-2 sm:px-0">
                    {techs.map(({ id, src, alt, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img
                                src={src}
                                alt={alt}
                                className="w-[300px] mx-auto rounded-md"
                            />
                            <p className="mt-4">{title}L</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;

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
        {
            id: 1,
            src: c_img,
            alt: "c_img",
            title: "C++",
            style: "shadow-blue-600",
        },
        {
            id: 2,
            src: jsvascript_icon,
            alt: "js_img",
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 3,
            src: python_img,
            alt: "python_img",
            title: "Python",
            style: "shadow-blue-800",
        },
        {
            id: 4,
            src: html_img,
            alt: "html_img",
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 5,
            src: css_img,
            alt: "css_img",
            title: "CSS",
            style: "shadow-blue-600",
        },
        {
            id: 6,
            src: react_img,
            alt: "react_img",
            title: "React JS",
            style: "shadow-blue-600",
        },
        {
            id: 7,
            src: mysql_img,
            alt: "mysql_img",
            title: "MySQL",
            style: "shadow-green-800",
        },
        {
            id: 8,
            src: tailwind_img,
            alt: "tailwind_img",
            title: "Tailwind CSS",
            style: "shadow-sky-400",
        },
        {
            id: 9,
            src: git_img,
            alt: "git_img",
            title: "Git",
            style: "shadow-orange-500",
        },
        {
            id: 11,
            src: postman_img,
            alt: "postman_img",
            title: "Postman",
            style: "shadow-orange-400",
        },
        {
            id: 10,
            src: github_img,
            alt: "github_img",
            title: "GitHub",
            style: "shadow-gray-600",
        },
    ];

    return (
        <div
            name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Experience
                    </p>
                    <p className="py-6">
                        These are the technologies & tools I've worked with
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-2 sm:px-0">
                    {techs.map(({ id, src, alt, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img
                                src={src}
                                alt={alt}
                                className="h-40 w-40 mx-auto rounded-md"
                            />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;

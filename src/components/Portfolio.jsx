import React from "react";
import Todo from "../assets/Todo.jpg";

function Portfolio() {
    const portfolios = [
        {
            id: 1,
            src: Todo,
            link: "https://github.com/RavirajKumarTiwari/React_To-Do_List",
        },
        {
            id: 2,
            src: Todo,
            ink: "https://github.com/RavirajKumarTiwari/Weather-App",
        },
        {
            id: 3,
            src: Todo,
            ink: "https://github.com/RavirajKumarTiwari/React_To-Do_List",
        },
        {
            id: 4,
            src: Todo,
            ink: "https://github.com/RavirajKumarTiwari/React_To-Do_List",
        },
        {
            id: 5,
            src: Todo,
            ink: "https://github.com/RavirajKumarTiwari/React_To-Do_List",
        },
        {
            id: 6,
            src: Todo,
            ink: "https://github.com/RavirajKumarTiwari/React_To-Do_List",
        },
    ];

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, link }) => (
                        <div
                            key={id}
                            className="shadow-md shadow-gray-600 rounded-lg"
                        >
                            <img
                                src={src}
                                alt="reactWeather"
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center ">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                                    Demo
                                </button>
                                <button
                                    onClick={() => window.open(link, "_blank")}
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 "
                                >
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;

// timestamp: 1:19:00

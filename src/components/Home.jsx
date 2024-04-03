import React from "react";
import hero_img from "../assets/hero_img.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="mt-20 text-4xl sm:text-7xl font-bold text-white">
                        I'm a Web Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        Creative coder bridging the gap between technology and
                        human interaction.
                    </p>
                    <div>
                        <Link
                            to="portfolio"
                            smooth={true}
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdKeyboardArrowRight
                                    size={25}
                                    className="group-ml-1"
                                />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="w-[450px]">
                    <img
                        src={hero_img}
                        alt="profile_pic"
                        className="rounded-2xl mx-auto w-2/3 shadow-md duration-300 md:w-full hover:shadow-xl hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;

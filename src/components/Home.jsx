import React from "react";
import hero_img from "../assets/hero_img.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

function Home() {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="mt-20 text-4xl sm:text-7xl font-bold text-white">
                        I'm a Front-End Developer
                    </h2>

                    <TypeAnimation
                        sequence={[
                            "Creative coder bridging the gap between technology and human interaction",
                            1000,
                            "Coding enthusiast building user-friendly web apps & eager to bridge the tech & user gap",
                            1000,
                            "Electronics & Communication Engineer turned web developer, passionate about creating innovative applications",
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="text-gray-500 py-4 max-w-md"
                    />

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
                <div className="w-[450px] mt-6 rounded-2xl shadow-md lg:hover:shadow-cyan-800 duration-300 lg:hover:scale-105">
                    <img
                        src={hero_img}
                        alt="profile_pic"
                        className="rounded-2xl mx-auto w-2/3 md:w-full"
                    />
                    <h1 className="my-6 text-5xl font-signature ml-2 text-white text-center">
                        Raviraj Kumar
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Home;

import React from "react";

function About() {
    return (
        <div
            name="about"
            className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                        About
                    </p>
                </div>
                <p className="text-xl mt-20 ">
                    Ever wondered how a simple click on a website triggers a
                    complex chain of events that displays information on your
                    screen? That's the magic of web development, and it's what
                    sparked my curiosity a few years ago while tinkering with
                    code.
                </p>

                <br />

                <p className="text-xl mt-10">
                    My journey into this realm began at the Haldia Institute of
                    Technology, where I was initially fascinated by the world of
                    electronics and communication. But amidst circuits and
                    signals, I discovered the power of programming languages
                    like C, C++, JavaScript and Python. They became my tools to
                    bridge the gap between technology and human interaction.
                </p>

                <br />

                <p className="text-xl mt-10">
                    Building user-friendly applications isn't just a task for
                    me, it's a pursuit of creating something innovative that
                    simplifies lives. It's like solving a puzzle, and the thrill
                    of seeing my code come to life as a functioning website is
                    unparalleled. My experiences working with APIs, for
                    instance, allowed me to craft a weather app that displays
                    real-time information, proving the power of code to connect
                    to the world around us.
                </p>

                <br />

                <p className="text-xl mt-10">
                    Besides coding, I'm a lifelong learner with a passion for
                    exploring new domains. I keep myself updated with the latest
                    advancements in the tech world and enjoy delving into
                    foreign affairs. These diverse interests help me stay
                    creative and inspired, qualities I bring to my web
                    development endeavors.
                </p>

                <br />

                <p className="text-xl mt-10">
                    I'm always on the lookout for new challenges and
                    opportunities to collaborate. Whether it's building a
                    weather app that goes beyond basic forecasts or crafting a
                    website that revolutionizes user experience, I'm eager to
                    contribute my skills and learn from experienced developers.
                    Are you looking for a passionate web development intern to
                    join your team? Let's chat!
                </p>
            </div>
        </div>
    );
}

export default About;

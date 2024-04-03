import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn
                    <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/raviraj-kumar-019956225",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    X (Twitter)
                    <FaSquareXTwitter size={30} />
                </>
            ),
            href: "https://twitter.com/RaviRaaZ_Tiwari",
        },
        {
            id: 3,
            child: (
                <>
                    GitHub
                    <FaGithub size={30} />
                </>
            ),
            href: "https://www.github.com/ravirajkumartiwari",
        },
        {
            id: 4,
            child: (
                <>
                    Email
                    <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:foo@gmail.com",
        },
        {
            id: 5,
            child: (
                <>
                    Resume
                    <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={
                            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                            " " +
                            style
                        }
                    >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-white"
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SocialLinks;

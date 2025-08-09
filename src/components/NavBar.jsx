import React, { useState, useContext, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { ThemeContext } from "../index";
import { FaMoon, FaSun } from "react-icons/fa";

function NavBar() {
    const [nav, setNav] = useState(false);
    const { theme, toggle } = useContext(ThemeContext);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const sectionIds = [
            "home",
            "about",
            "portfolio",
            "experience",
            "contact",
        ];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.getAttribute("name"));
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px",
                threshold: [0, 0.25, 0.5, 0.75, 1],
            }
        );
        sectionIds.forEach((id) => {
            const el = document.querySelector(`[name="${id}"]`);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const links = [
        {
            id: 1,
            link: "Home",
        },
        {
            id: 2,
            link: "About",
        },
        {
            id: 3,
            link: "Portfolio",
        },
        {
            id: 4,
            link: "Experience",
        },
        {
            id: 5,
            link: "Contact",
        },
    ];

    return (
        <nav
            aria-label="Main navigation"
            className="backdrop-blur-md bg-white/55 dark:bg-black/55 supports-[backdrop-filter]:bg-white/35 dark:supports-[backdrop-filter]:bg-black/35 flex justify-between items-center w-full h-16 md:h-20 text-slate-800 dark:text-slate-100 px-4 fixed z-20 border-b border-slate-200/60 dark:border-slate-700/60"
        >
            <div className="flex items-center gap-2">
                <span
                    className="text-3xl md:text-4xl font-signature ml-2 tracking-wide drop-shadow-sm select-none"
                    aria-label="Site name"
                >
                    Raviraj
                </span>
            </div>
            <ul className="hidden md:flex items-center gap-2" role="menubar">
                {links.map(({ link, id }) => {
                    const lower = link.toLowerCase();
                    const isActive = active === lower;
                    return (
                        <li key={id} role="none" className="relative">
                            <Link
                                to={lower}
                                smooth={true}
                                duration={500}
                                role="menuitem"
                                className={`px-4 py-2 rounded-full text-sm font-medium focus-ring transition-colors ${
                                    isActive
                                        ? "active-nav"
                                        : "text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400"
                                }`}
                            >
                                {link}
                            </Link>
                            {isActive && (
                                <span className="pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                            )}
                        </li>
                    );
                })}
                <li role="none">
                    <button
                        onClick={toggle}
                        aria-label="Toggle color theme"
                        className="glass-action-btn focus-ring ml-2"
                    >
                        <span className="glass-action-btn-inner">
                            {theme === "dark" ? (
                                <FaSun className="text-amber-400" />
                            ) : (
                                <FaMoon className="text-slate-700" />
                            )}
                        </span>
                    </button>
                </li>
            </ul>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-30 text-slate-600 dark:text-slate-300 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul
                    className="flex flex-col gap-6 justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-50 to-slate-200 dark:from-black dark:to-slate-800 text-slate-700 dark:text-slate-300"
                    role="menu"
                >
                    {links.map(({ link, id }) => (
                        <li key={id} role="none" className="px-4">
                            <Link
                                onClick={() => setNav(!nav)}
                                to={link.toLowerCase()}
                                smooth={true}
                                duration={500}
                                role="menuitem"
                                className="text-xl tracking-wide capitalize focus-ring"
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => {
                                toggle();
                                setNav(false);
                            }}
                            className="glass-action-btn focus-ring"
                        >
                            <span className="glass-action-btn-inner text-xs font-semibold tracking-wide">
                                {theme === "dark" ? "Light Mode" : "Dark Mode"}
                            </span>
                        </button>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default NavBar;

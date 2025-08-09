import NavBar from "./components/NavBar";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const onScroll = () => {
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            setProgress(height ? scrollTop / height : 0);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <div className="App bg-white dark:bg-black text-slate-800 dark:text-slate-100 transition-colors duration-300">
            <div className="fixed top-0 left-0 right-0 h-0.5 z-30">
                <div
                    style={{ transform: `scaleX(${progress})` }}
                    className="origin-left h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 transition-[transform] duration-150 ease-out"
                />
            </div>
            <a href="#main" className="skip-link">
                Skip to main content
            </a>
            <NavBar />
            <main id="main" role="main">
                <Home />
                <About />
                <Portfolio />
                <Experience />
                <Contact />
            </main>
            <SocialLinks />
        </div>
    );
}

export default App;

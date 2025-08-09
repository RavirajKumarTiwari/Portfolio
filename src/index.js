import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Simple theme provider using context
const ThemeContext = React.createContext({ theme: "dark", toggle: () => {} });

function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState(() => {
        const stored = localStorage.getItem("theme");
        return stored ? stored : "dark";
    });

    React.useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const value = React.useMemo(
        () => ({
            theme,
            toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export { ThemeContext };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class", // enable class strategy for dark mode
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                signature: ["Great Vibes"],
            },
            boxShadow: {
                "glow-cyan":
                    "0 0 10px -2px rgba(34,211,238,0.6), 0 0 25px -4px rgba(14,165,233,0.4)",
            },
        },
    },
    plugins: [],
};

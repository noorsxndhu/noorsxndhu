import { MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react"

export default function Themetoggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedtheme = localStorage.getItem("theme");
        if (storedtheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark")
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, [])

    const toggletheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }


    return (
        <>
            <button onClick={toggletheme} className="themetoggle">
                {isDarkMode ? <Sun className="h-4 w-5 text-white-300" /> : <MoonStar className="h-5 w-6 text-dark-900" />}
            </button>
        </>
    )

}

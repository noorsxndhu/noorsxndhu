import { Github, House, Linkedin, SeparatorVertical, Twitter, User } from "lucide-react";
import Themetoggle from "./ThemeToggle.jsx";

export default function Navbar() {

    return (
        <>
            <div className="
            fixed left-1/2 -translate-x-1/2 mt-5 mx-0.5 z-50
        flex items-center justify-between
        backdrop-blur-sm bg-white/10 shadow-md

        w-full max-w-[850px]
         px-16 sm:px-24 md:px-48  lg:px-40 py-2  sm:py-3 md:py-4 
        rounded-3xl"
            >

                <button onClick={() => {
                    document.getElementById("herosection").scrollIntoView({ behavior: "smooth" });
                }}>
                    <House className="icons" />
                </button>

                <button onClick={() => {
                    document.getElementById("projectsection").scrollIntoView({ behavior: "smooth" });
                }}>
                    <SeparatorVertical className="icons" />
                </button>

                <User className="icons" />

                <p>|</p>

                <a href="https://github.com/noorsxndhu"><Github className="icons" /></a>

                <a href="https://x.com/noorsxndhu"><Twitter className="icons" /></a>

                <a href="https://www.linkedin.com/in/noorsandhu157/"> <Linkedin className="icons" /></a>

                <p>|</p>

                <Themetoggle />

            </div>

        </>


    )
}
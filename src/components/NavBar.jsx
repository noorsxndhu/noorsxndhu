import { Github, House, Linkedin, SeparatorVertical, StickyNote, Twitter, User } from "lucide-react";
import Themetoggle from "./ThemeToggle";

export default function Navbar() {

    return (
        <>
            <div className="w-full max-w-[400px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[850px]
             mt-5 py-3 px-12 sm:px-36 md:px-36 lg:px-36
            border rounded-3xl
            flex fixed 
            left-1/2 -translate-x-1/2 
            justify-center justify-between 
            backdrop-blur-sm bg-white/10 
            shadow-md 
            z-50"
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
import { Github, House, Linkedin, SeparatorVertical, StickyNote, Twitter, User } from "lucide-react";
import Themetoggle from "./ThemeToggle";

export default function Navbar() {

    return (
        <>
            <div className="w-[850px] 
             mt-5 py-[12px] px-[150px]
            border rounded-3xl
            flex fixed 
            left-1/2 -translate-x-1/2 
            justify-center justify-between 
            backdrop-blur-sm bg-white/10 
            shadow-md p-3
            z-50"
            >
                <House className="icons" />

                <SeparatorVertical className="icons" />

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
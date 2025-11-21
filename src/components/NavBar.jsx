import { Github, House, Linkedin, SeparatorVertical, StickyNote, Twitter, User } from "lucide-react";
import Themetoggle from "./ThemeToggle";

export default function Navbar() {

    return (
        <>
            <div className="w-[800px] 
             mt-3 py-[12px] px-[150px]
            border rounded-3xl
            flex fixed 
            left-1/2 -translate-x-1/2 
            sticky-top justify-center justify-between 
            backdrop-blur-xl bg-white/10
            border border-white/20 
            shadow-lg p-3
            scroll-smooth"
            >
                <House className="icons" />

                <SeparatorVertical className="icons" />

                <User className="icons" />

                <p>|</p>

                <StickyNote className="icons" />

                <a href="https://github.com/noorsxndhu"><Github className="icons" /></a>

                <a href="https://x.com/noorsxndhu"><Twitter className="icons" /></a>

               <a href="https://www.linkedin.com/in/noorsandhu157/"> <Linkedin className="icons" /></a>

                <p>|</p>

                <Themetoggle />

            </div>

        </>


    )
}
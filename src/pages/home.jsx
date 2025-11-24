import StarBackground from "@/components/StarBackground";
import Themetoggle from "@/components/ThemeToggle";
import Navbar from "../components/NavBar";
import Hero from "@/components/Hero";

import Skills from "@/components/Skills";
import Contribution from "@/components/github";
import About from "@/components/About";
import Projects from "@/components/Projects";


export default function Home() {
    return (
        <div className="min-h-screen ">

            {/* Theme toggle */}

            {/* Background effects */}
            <StarBackground />

            {/*  Navbar */}
            <Navbar />

            {/*  Hero */}
            <Hero />

            {/*  About */}
            <About/>

            {/*  Skills */}
            <Skills />

            {/*  Projects */}
             <Projects/>

            {/*  Github */}
            <Contribution/>

            {/*  Contact */}

            {/*  Footer */}

        </div>
    )
}
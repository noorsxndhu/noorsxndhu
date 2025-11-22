import StarBackground from "@/components/StarBackground";
import Themetoggle from "@/components/ThemeToggle";
import Navbar from "../components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";


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

            {/*  Projects */}

            {/*  Github */}

            {/*  Contact */}

            {/*  Footer */}

        </div>
    )
}
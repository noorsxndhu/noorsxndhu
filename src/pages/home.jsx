import StarBackground from "@/components/StarBackground.jsx";
import Navbar from "../components/NavBar.jsx";
import Hero from "@/components/Hero.jsx";
import Skills from "@/components/Skills.jsx";
import About from "@/components/About.jsx";
import Projects from "@/components/Projects.jsx";
import Contactform from "@/components/Contactform.jsx";
import Footer from "@/components/footer.jsx";
import Github from "@/components/Github.jsx";



export default function Home() {
    return (
        <div className="min-h-screen">

            {/* Theme toggle */}

            {/* Background effects */}
            <StarBackground/>

            {/*  Navbar */}
            <Navbar/>

            {/*  Hero */}
            <Hero/>

            {/*  About */}
            <About/>

            {/*  Skills */}
            <Skills/>

            {/*  Projects */}
            <Projects/>

            {/*  Github */}
            <Github/>

            {/*  Contact */}
            <Contactform/>

            {/*  Footer */}
            <Footer/>

        </div>
    )
}
import React from "react";
import Intro from "./Intro";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";

export default function MainPage() {
    return (
        <div className="bg-[var(--bg)] h-full ">
            <div>
                <Navbar />
            </div>
            <div className="mx-auto container">
                <div className="justify-between flex pt-20">
                    <Intro />
                </div>
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

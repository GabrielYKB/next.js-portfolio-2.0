import React from "react";
import Intro from "./Intro";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import ScrollDownIndicator from "./ScrollDownIndicator";

export default function MainPage() {
    return (
        <div className="bg-[var(--bg)] h-full ">
            <div>
                <Navbar />
            </div>
            <div className="mx-auto container">
                <div className="">
                    <Intro />
                    <ScrollDownIndicator />
                </div>
                <About />

                <div className="mb-16 text-2xl font-semibold text-white ">
                    <h3 className="flex items-center gap-8">
                        My Projects
                        <div className="h-0.5 w-96 bg-[var(--detail)] relative top-1" />
                    </h3>
                </div>
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

import React from "react";
import Intro from "./Intro";
import Hero from "./Hero";
import Cards from "./Cards";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";

export default function MainPage() {
    return (
        <div className="bg-[var(--bg)] h-full ">
            <div className="mx-auto container">
                <Navbar />
                <div className="justify-between flex py-28">
                    <div className="py-20">
                        <Intro />
                    </div>
                    <div>
                        <Hero />
                    </div>
                </div>
                <About />
                <Skills />
                <Cards />
                <Contact />
            </div>
        </div>
    );
}

import React from "react";
import Intro from "./Intro";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import ScrollDownIndicator from "./ScrollDownIndicator";
import Image from "next/image";

export default function MainPage() {
    return (
        <div className="bg-[var(--bg)] h-full ">
            <div className="flex fixed bottom-0 left-12 flex-col items-center gap-4">
                <a href="https://github.com/GabrielYKB">
                    <img
                        src="github-mark-white.svg"
                        className="w-7 transition duration-300 hover:duration-300 hover:scale-125"
                        alt=""
                    />
                </a>
                <a href="https://www.linkedin.com/in/gabriel-yakoub-65ab74185/">
                    <img
                        src="linkedin.svg"
                        className="w-8 transition duration-300 hover:duration-300 hover:scale-125"
                        alt=""
                    />
                </a>
                <a href="https://twitter.com/gabrielykb">
                    <img
                        src="twitter.svg"
                        className="w-8 transition duration-300 hover:duration-300 hover:scale-125"
                        alt=""
                    />
                </a>
                <div className="text-white h-28 w-0.5 bg-[var(--detail)] " />
            </div>
            <div className="flex fixed bottom-0 right-12 flex-col items-center gap-28 w-8">
                <p className=" rotate-90 text-white hover:text-[var(--detail)] duration-150 hover:duration-150">
                    Gabriel.yakooub@gmail.com
                </p>
                <div className=" h-28 w-0.5 bg-[var(--detail)] " />
            </div>

            <div className="mx-auto container">
                <Navbar />
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

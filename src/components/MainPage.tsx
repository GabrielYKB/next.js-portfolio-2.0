import React from "react";
import Intro from "./Intro";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import ScrollDownIndicator from "./ScrollDownIndicator";
import IndexPage from "./IndexPage";

export default function MainPage() {
    return (
        <div className="bg-[var(--bg)] h-full ">
            <IndexPage />
            <div className="flex fixed bottom-0 lg:left-12 flex-col items-center gap-4 sm:left-4 invisible md:visible ">
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
            <div className="flex fixed bottom-0 lg:right-12 flex-col items-center gap-28 w-8 sm:right-4 invisible md:visible ">
                <p className=" rotate-90 text-white hover:text-[var(--detail)] duration-150 hover:duration-150">
                    Gabriel.yakooub@gmail.com
                </p>
                <div className=" h-28 w-0.5 bg-[var(--detail)] " />
            </div>

            <div className="sm:mx-auto sm:container mx-10">
                <Navbar />
                <div className="">
                    <Intro />
                    <ScrollDownIndicator />
                </div>
                <About />
                <div className="mb-16 text-2xl font-semibold text-white flex items-center gap-6 ">
                    <h3 className="flex items-center">My Projects</h3>
                    <div className="h-0.5 xl:w-96 sm:w-60 lg:w-80 bg-[var(--detail)] relative top-1 w-36" />
                </div>
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

import React from "react";
import Hero from "./Hero";

export default function About() {
    return (
        <div id="about" className=" text-white mb-16" data-aos="fade-up">
            <div className="mb-16 text-2xl font-semibold text-white flex items-center gap-6">
                <h3 className="flex items-center">About Me</h3>
                <div className="h-0.5 xl:w-96 sm:w-60 lg:w-80 bg-[var(--detail)] relative top-1 w-40" />
            </div>
            <div className="flex md:flex-col xl:flex-row md:gap-8 xl:gap-10 xl:justify-evenly xl:items-center">
                <div className="">
                    <p className="bg-[var(--secondary)] rounded-lg text-start text-lg p-5 font-light text-gray-200 mb-3 max-w-2xl">
                        As a junior software developer with a diverse set of
                        skills ranging from frontend technologies like React,
                        Javascript, Typescript, and Tailwind CSS to backend
                        technologies like Node.JS, Express, and MongoDB, I have
                        all the tools necessary to build robust and scalable
                        applications. However, what sets me apart from others is
                        my passion for coding and love for problem solving.
                        <br />
                        <br />I thrive on tackling complex problems and finding
                        elegant solutions that not only meet the requirements
                        but also exceed the expectations of my clients and
                        end-users.
                    </p>
                    <div className="bg-[var(--secondary)] rounded-lg text-start text-sm p-4 font-light text-gray-200 flex gap-10 justify-between md:px-8">
                        <div>
                            <p>Javascript</p>
                            <p>Typescript</p>
                            <p>React</p>
                            <p>Tailwind CSS</p>
                        </div>
                        <div>
                            <p>Node.JS</p>
                            <p>Express</p>
                            <p>MongoDB</p>
                            <p>API</p>
                        </div>
                        <div>
                            <p>Git/Github</p>
                            <p>NPM</p>
                            <p>ChatGPT</p>
                            <p>Trello</p>
                        </div>
                    </div>
                </div>
                <div className="hidden xl:block">
                    <Hero />
                </div>
            </div>
        </div>
    );
}

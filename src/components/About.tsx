import React from "react";
import Hero from "./Hero";

export default function About() {
    return (
        <div id="about" className=" text-white mb-16" data-aos="fade-up">
            <div className="mb-16 text-2xl font-semibold text-white flex items-center gap-5">
                <h3 className="flex items-center gap-8">
                    About me
                    <div className="h-0.5 w-96 bg-[var(--detail)] relative top-1" />
                </h3>
            </div>
            <div className="flex justify-evenly items-center">
                <div className="">
                    <p className="bg-[var(--secondary)] rounded-lg text-center text-lg p-4 font-light text-gray-200 mb-1 w-128">
                        As a junior software developer with a diverse set of
                        skills ranging from frontend technologies like React,
                        Javascript, Typescript, and Tailwind CSS to backend
                        technologies like Node.JS, Express, and MongoDB, I have
                        all the tools necessary to build robust and scalable
                        applications. However, what sets me apart from others is
                        my passion for coding and love for problem solving. I
                        thrive on tackling complex problems and finding elegant
                        solutions that not only meet the requirements but also
                        exceed the expectations of my clients and end-users. My
                        love for coding goes beyond just the technical aspects
                        of it.
                    </p>
                    <div className="bg-[var(--secondary)] rounded-lg text-start text-sm p-4 font-light text-gray-200 flex gap-10 justify-between px-8">
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
                <Hero />
            </div>
        </div>
    );
}

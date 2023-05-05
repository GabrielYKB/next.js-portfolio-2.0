import React from "react";
import Hero from "./Hero";

export default function About() {
    return (
        <div id="about" className=" text-white mb-16">
            <div className="mb-16 text-2xl font-semibold text-white">
                <h3>About me </h3>
            </div>
            <div className="flex  justify-between items-center">
                <p className="bg-[var(--secondary)] rounded-lg text-center text-lg p-4 font-light text-gray-200 w-128">
                    As a junior software developer with a diverse set of skills
                    ranging from frontend technologies like React, Javascript,
                    Typescript, and Tailwind CSS to backend technologies like
                    Node.JS, Express, and MongoDB, I have all the tools
                    necessary to build robust and scalable applications.
                    However, what sets me apart from others is my passion for
                    coding and love for problem solving. I thrive on tackling
                    complex problems and finding elegant solutions that not only
                    meet the requirements but also exceed the expectations of my
                    clients and end-users. My love for coding goes beyond just
                    the technical aspects of it. For me, coding is a form of
                    self-expression, a way to turn my ideas into reality, and a
                    means to create something meaningful that has a positive
                    impact on the world. I take pride in my work and I&apos;m
                    constantly pushing myself to learn and grow, staying
                    up-to-date with the latest trends and best practices in the
                    industry.
                </p>
                <Hero />
            </div>
        </div>
    );
}

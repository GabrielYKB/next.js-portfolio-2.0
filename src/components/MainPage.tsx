import React from "react";
import Intro from "./Intro";
import Hero from "./Hero";
import Skills from "./Skills";

export default function MainPage() {
    return (
        <div className="bg-[var(--bg)] h-screen  ">
            <div className="justify-between flex mx-56 p-56">
                <div className="py-20">
                    <Intro />
                </div>
                <div>
                    <Hero />
                </div>
            </div>
            <Skills />
        </div>
    );
}

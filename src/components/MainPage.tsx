import React from "react";
import Intro from "./Intro";
import Hero from "./Hero";
import Skills from "./Skills";
import { Tabs } from "@material-tailwind/react";

export default function MainPage() {
    return (
        <div className="bg-[var(--bg)] h-full">
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

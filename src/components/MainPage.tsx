import React from "react";
import Intro from "./Intro";
import Hero from "./Hero";

export default function MainPage() {
    return (
        <div className="bg-[var(--bg)] h-screen ">
            <div>
                <div className="flex">
                    <Intro />
                    <Hero />
                </div>
            </div>
        </div>
    );
}

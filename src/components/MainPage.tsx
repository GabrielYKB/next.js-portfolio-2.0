import React from "react";
import Intro from "./Intro";
import Hero from "./Hero";

export default function MainPage() {
    return (
        <div className="bg-[var(--bg)] h-screen  ">
            <div className="justify-between flex mx-56 p-48">
                <Intro />
                <div>
                    <Hero />
                </div>
            </div>
        </div>
    );
}

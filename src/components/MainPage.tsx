import React from "react";
import Intro from "./Intro";
import Hero from "./Hero";

export default function MainPage() {
    return (
        <div className="bg-[var(--bg)] h-screen flex">
            <div className="mt-24">
                <div className="fixed left-80 top-52">
                    <Intro />
                </div>
                <Hero />
            </div>
        </div>
    );
}

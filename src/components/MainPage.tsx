import React from "react";
import Intro from "./Intro";
import Hero from "./Hero";
import Tabs from "./Tabs";

export default function MainPage() {
    return (
        <div className="bg-[var(--bg)] h-screen ">
            <div className="mx-auto container">
                <div className="justify-between flex  py-28">
                    <div className="py-20">
                        <Intro />
                    </div>
                    <div>
                        <Hero />
                    </div>
                </div>
                <Tabs />
            </div>
        </div>
    );
}

import React from "react";
import Intro from "./Intro";
import Hero from "./Hero";
import Tabs from "./Tabs";
import Cards from "./Cards";
import Navbar from "./Navbar";

export default function MainPage() {
    return (
        <div className="bg-[var(--bg)] h-full ">
            <div className="mx-auto container">
                <Navbar />
                <div className="justify-between flex py-28">
                    <div className="py-20">
                        <Intro />
                    </div>
                    <div>
                        <Hero />
                    </div>
                </div>
                <Cards />
            </div>
        </div>
    );
}

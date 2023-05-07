import React from "react";
import Typewriter from "typewriter-effect";
import ScrollDownIndicator from "./ScrollDownIndicator";

export default function Intro() {
    return (
        <div className="h-screen flex items-center">
            <div
                id="home"
                className="p-6 bg-[var(--secondary)] rounded-3xl -mt-28"
                style={{ width: 1000 }}
            >
                <div className="font-black text-transparent text-7xl bg-clip-text bg-gradient-to-tl from-red-500 to-[var(--detail)] max-w-xl">
                    Hello!
                </div>
                <div className="text-white text-4xl font-medium">
                    <div className="py-4">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .changeDelay(55)
                                    .typeString(
                                        "My name is Gabriel Yakoub and I'm a Junior software developer. "
                                    )
                                    .start();
                            }}
                        />
                    </div>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(55)
                                .pauseFor(4000)
                                .typeString("Welcome to my portfolio page!")
                                .start();
                        }}
                    />
                </div>
            </div>
            <ScrollDownIndicator />
        </div>
    );
}

import React from "react";
import Typewriter from "typewriter-effect";

export default function Intro() {
    return (
        <div className="h-screen">
            <div
                id="home"
                className="p-6 pb-10 bg-[var(--secondary)] rounded-3xl"
                style={{ width: 1000 }}
            >
                <div className="font-black text-transparent text-7xl bg-clip-text bg-gradient-to-l from-[var(--detail)] to-white max-w-xl">
                    Hello!
                </div>
                <div className="text-white text-4xl font-medium">
                    <div className="py-4">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .changeDelay(55)
                                    .typeString(
                                        "My name is Gabriel and I'm a Junior software developer. "
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
        </div>
    );
}

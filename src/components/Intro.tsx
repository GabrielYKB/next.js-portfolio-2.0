import React from "react";
import Typewriter from "typewriter-effect";

export default function Intro() {
    return (
        <div className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-l from-[var(--detail)] to-purple-700 max-w-xl">
            Hello!
            <div className="text-white font-bold">
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
    );
}

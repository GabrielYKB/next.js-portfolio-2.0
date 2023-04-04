import React from "react";
import Typewriter from "typewriter-effect";

export default function Intro() {
    return (
        <div>
            <div className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 max-w-5xl">
                Hello!
                <div className="text-white font-bold">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(55)
                                .typeString(
                                    "My name is Gabriel and I'm a software developer."
                                )
                                .pauseFor(2000)
                                .changeDeleteSpeed(15)
                                .deleteChars(48)
                                .typeString("Welcome to my portfolio page!")
                                .pauseFor(1000)
                                .start();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

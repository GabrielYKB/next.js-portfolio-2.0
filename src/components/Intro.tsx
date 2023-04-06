import React from "react";
import Typewriter from "typewriter-effect";

export default function Intro() {
    return (
        <div className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-green-600 max-w-xl">
            Hello!
            <div className="py-2 text-white font-bold">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .changeDelay(55)
                            .typeString(
                                "My name is Gabriel and I'm a Junior software developer. "
                            )

                            .pauseFor(700)
                            .typeString("Welcome to my portfolio page!")
                            .pauseFor(1000)
                            .start();
                    }}
                />
            </div>
        </div>
    );
}

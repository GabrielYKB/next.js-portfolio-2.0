import React from "react";
import Typewriter from "typewriter-effect";

export default function Intro() {
    return (
        <div className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-green-600 max-w-xl">
            Hello!
            <div className="py-2 text-white font-bold">
                <div className="pb-5">
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

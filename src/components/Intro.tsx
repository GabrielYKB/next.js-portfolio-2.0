import React from "react";
import Typewriter from "typewriter-effect";

export default function Intro() {
    return (
        <div className="h-screen flex items-center" data-aos="fade-up">
            <div
                id="home"
                className="p-6 rounded-3xl -mt-28"
                style={{ width: 1000 }}
            >
                <div className="font-black text-transparent 2xl:text-7xl md:text-5xl bg-clip-text bg-gradient-to-tl from-red-500 to-[var(--detail)] max-w-xl ">
                    Hello!
                </div>
                <div className="text-white 2xl:text-3xl md:text-xl font-medium">
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
        </div>
    );
}

import React from "react";
import Typewriter from "typewriter-effect";

export default function Intro() {
    return (
        <div>
            <div className="text-3xl text-white">
                Hello!
                <div className="">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .start()
                                .changeDelay(65)
                                .typeString(
                                    "My name is Gabriel and I'm an software developer."
                                );
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

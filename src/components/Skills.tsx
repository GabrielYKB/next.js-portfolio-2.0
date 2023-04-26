import React from "react";

export default function Skills() {
    const skillsData = [
        {
            headline: "Frontend",
            content: (
                <div>
                    <p>React</p>
                    <p>Javascript</p>
                    <p>Typescrit</p>
                    <p>Tailwind CSS</p>
                    <p>CSS</p>
                </div>
            ),
        },
        {
            headline: "Backend",
            content: (
                <div>
                    <p>Node.JS</p>
                    <p>Express</p>
                    <p>MongoDB</p>
                    <p>API</p>
                </div>
            ),
        },
        {
            headline: "Other",
            content: (
                <div>
                    <p>Git/Github</p>
                    <p>NPM</p>
                </div>
            ),
        },
    ];

    return (
        <div className="h-96">
            <div className="flex justify-evenly ">
                {skillsData.map((skill) => {
                    return (
                        <div className="flex flex-col items-center bg-[var(--secondary)] rounded-lg pt-4 text-center ">
                            <div className="w-52 flex pb-1 justify-center mb-2">
                                <div className="border-b-2 w-36 border-[var(--detail)] text-xl font-medium">
                                    <h3>{skill.headline}</h3>
                                </div>
                            </div>
                            <div className="mb-4 text-lg font-light">
                                {skill.content}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

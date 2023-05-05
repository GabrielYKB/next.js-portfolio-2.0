import React from "react";

export default function Skills() {
    const skillsData = [
        {
            id: 1,
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
            id: 2,
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
            id: 3,
            headline: "Other",
            content: (
                <div>
                    <p>Git/Github</p>
                    <p>NPM</p>
                    <p>ChatGPT</p>
                    <p>Trello</p>
                </div>
            ),
        },
    ];

    return (
        <div id="skills" className="h-96">
            <div className="flex justify-between">
                {skillsData.map((skill) => {
                    return (
                        <div
                            key={skill.id}
                            className="flex flex-col items-center bg-[var(--secondary)] rounded-lg pt-4 text-center"
                        >
                            <div className="w-52 flex pb-1 justify-center mb-2">
                                <div className="border-b-2 w-36 border-[var(--detail)] text-xl font-semibold">
                                    <h3>{skill.headline}</h3>
                                </div>
                            </div>
                            <div className="mb-4 text-lg font-normal">
                                {skill.content}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

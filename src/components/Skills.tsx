import React from "react";

export default function Skills() {
    return (
        <div className="flex justify-evenly h-96">
            <div className="flex flex-col items-center">
                <div className="border-b-2 border-violet-500 w-64 flex justify-center mb-2">
                    <h3>Frontend</h3>
                </div>
                <p>React</p>
                <p>Javascript</p>
                <p>Typescrit</p>
                <p>Tailwind CSS</p>
                <p>CSS</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="border-b-2 border-violet-500 w-64 flex justify-center mb-2">
                    <h3>Backend</h3>
                </div>
                <p>Node.JS</p>
                <p>Express</p>
                <p>MongoDB</p>
                <p>API</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="border-b-2 border-violet-500 w-64 flex justify-center mb-2">
                    <h3>Other</h3>
                </div>
                <p>Git/Github</p>
                <p>NPM</p>
            </div>
        </div>
    );
}

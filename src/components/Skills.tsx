import React from "react";

export default function Skills() {
    return (
        <div className="flex justify-evenly">
            <div className="flex flex-col items-center">
                <div className="border-b-2 border-violet-500 w-64 flex justify-center mb-2">
                    <h3>Frontend</h3>
                </div>
                <p>CSS</p>
                <p>CSS</p>
                <p>CSS</p>
                <p>CSS</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="border-b-2 border-violet-500 w-64 flex justify-center mb-2">
                    <h3>Backend</h3>
                </div>
                <p>MongoDB</p>
                <p>MongoDB</p>
                <p>MongoDB</p>
                <p>MongoDB</p>
            </div>
        </div>
    );
}

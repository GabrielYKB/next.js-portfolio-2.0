import React from "react";

export default function Navbar() {
    return (
        <div className="w-full bg-[var(--primary)] border-b-solid border-b-2 border-b-[var(--secondary)] h-8 text-white text-xl">
            <div className="pl-3 flex justify-between">
                GY
                <div className="pr-3 gap-3 flex">
                    <a href="./About">About</a>
                    <a href="./Contact">Contact</a>
                    <a href="./Work">My work</a>
                </div>
            </div>
        </div>
    );
}

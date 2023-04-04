import React from "react";

export default function Navbar() {
    return (
        <div className="w-full bg-[var(--bg)] border-b-solid border-b-2 border-b-[var(--secondary)] h-8 text-white text-xl fixed">
            <div className="pl-3 flex justify-between">
                GY
                <div className="pr-3 gap-3 flex ">
                    <div className="hover:text-indigo-600">
                        <a href="./About">About</a>
                    </div>
                    <div className="hover:text-indigo-600">
                        <a href="./Contact">Contact</a>
                    </div>
                    <div className="hover:text-indigo-600">
                        <a href="./Work">My work</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

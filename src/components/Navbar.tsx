import React from "react";

export default function Navbar() {
    return (
        <div className="w-full bg-[var(--primary)] border-b-solid border-b-2 border-b-[var(--secondary)] h-10 text-white text-2xl">
            <div className=" flex justify-between">
                Gabriel Yakoub
                <div className="pr-3 gap-3 flex">
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">My work</a>
                </div>
            </div>
        </div>
    );
}

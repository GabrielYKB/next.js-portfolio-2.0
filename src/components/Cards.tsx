import React from "react";
import Card from "./Card";

export default function Cards() {
    return (
        <div className="bg-[var(--bg)] h-full">
            <div className="flex justify-center mb-16 text-2xl font-semibold text-white">
                <h3>My work</h3>
            </div>
            <Card />
        </div>
    );
}

import React from "react";
import Card from "./Card";

export default function Cards() {
    return (
        <div id="cards" className="bg-[var(--bg)] h-full mb-16">
            <div className="flex mb-16 text-2xl font-semibold text-white">
                <h3>3. My work</h3>
            </div>
            <Card />
        </div>
    );
}

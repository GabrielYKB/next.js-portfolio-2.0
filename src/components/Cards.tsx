import React from "react";
import Card from "./Card";

export default function Cards() {
    return (
        <div className="h-96">
            <div className="border-b-4 border-[var(--detail)] flex justify-center mb-16 text-xl font-semibold">
                <h3>My work</h3>
            </div>
            <Card />
        </div>
    );
}

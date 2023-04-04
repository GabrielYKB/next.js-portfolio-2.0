import React from "react";
import Intro from "./Intro";

export default function MainPage() {
    return (
        <div className="bg-[var(--primary)] h-screen mx-56">
            <div>
                <div>
                    <Intro />
                </div>
            </div>
        </div>
    );
}

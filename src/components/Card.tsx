import React from "react";
import Tilt from "react-parallax-tilt";

export default function Card() {
    return (
        <div>
            <Tilt>
                <div className="h-32 w-32 bg-blue-400">
                    <h1>test</h1>
                </div>
            </Tilt>
        </div>
    );
}

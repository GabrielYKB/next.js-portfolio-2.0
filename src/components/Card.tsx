import React from "react";
import Tilt from "react-parallax-tilt";

export default function Card() {
    return (
        <div className="flex">
            <Tilt>
                <div className="h-32 w-32 bg-blue-400"></div>
            </Tilt>
        </div>
    );
}

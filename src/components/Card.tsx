import React from "react";
import Tilt from "react-parallax-tilt";

export default function Card() {
    return (
        <div className="flex">
            <Tilt>
                <div className="h-80 w-56 bg-blue-400"></div>
            </Tilt>
        </div>
    );
}

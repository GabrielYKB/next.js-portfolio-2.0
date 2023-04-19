import React from "react";
import Tilt from "react-parallax-tilt";

export default function Card() {
    return (
        <div className="">
            <Tilt>
                <div className="h-80 w-56 bg-violet-500 flex rounded-lg items-center justify-start flex-col">
                    <div className=" bg-red-500 w-48 h-48 m-5 rounded-lg">
                        img
                    </div>
                    <div className=" bg-orange-500 w-48 h-16 rounded-lg">
                        desc
                    </div>
                </div>
            </Tilt>
        </div>
    );
}

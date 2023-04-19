import React from "react";
import Tilt from "react-parallax-tilt";

export default function Card() {
    const cardsData = [
        {
            label: "img1",
            content: "description",
        },
        {
            label: "img2",
            content: "description2",
        },
        {
            label: "img3",
            content: "description3",
        },
        {
            label: "img4",
            content: "description4",
        },
    ];

    return (
        <div className="">
            <Tilt>
                <div className="h-80 w-56 bg-violet-500 flex rounded-lg items-center justify-start flex-col">
                    <div className=" bg-red-500 w-52 h-48 rounded-lg m-2">
                        {cardsData.label}
                    </div>
                    <div className=" bg-orange-500 w-52 h-24 mt-2 rounded-lg">
                        {cardsData.map}
                    </div>
                </div>
            </Tilt>
        </div>
    );
}

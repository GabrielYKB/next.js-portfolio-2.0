import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

export default function Card() {
    const cardsData = [
        {
            label: "img1",
            content: "description",
            link: "",
        },
        {
            label: "img2",
            content: "description2",
            link: "",
        },
        {
            label: "img3",
            content: "description3",
            link: "",
        },
        {
            label: "img4",
            content: "description4",
            link: "",
        },
    ];

    const [cardData, setCardData] = useState([]);

    return (
        <div className="flex space-x-20 justify-center">
            {cardsData.map((card, dsc) => {
                return (
                    <Tilt>
                        <div className="h-80 w-56 bg-violet-500 flex rounded-lg items-center justify-start flex-col">
                            <div className=" bg-red-500 w-52 h-48 rounded-lg m-2 ">
                                <div className="h-8 w-8 bg-white fixed right-1 top-1 rounded-full">
                                    <a href="">
                                        <img src="github-mark.svg" />
                                    </a>
                                </div>
                                {card.label}
                            </div>
                            <div className=" bg-orange-500 w-52 h-24 mt-2 rounded-lg">
                                {card.content}
                            </div>
                        </div>
                    </Tilt>
                );
            })}
        </div>
    );
}

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

export default function Card() {
    const cardsData = [
        {
            label: "https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/641d79095b3c99786038f958/screenshot_2023-03-24-10-19-49-0000.png",
            content: "Kanban Board",
            link: "https://chimera-ant.netlify.app/",
            repo: "https://github.com/GabrielYKB/kanban-board",
        },
        {
            label: "img2",
            content: "Slack Clone",
            link: "",
            repo: "https://github.com/GabrielYKB/Slack-clone",
        },
        {
            label: "img3",
            content: "Spotify Clone",
            link: "",
            repo: "https://github.com/GabrielYKB/spotify-clone",
        },
        {
            label: "img4",
            content: "description4",
            link: "",
            repo: "",
        },
    ];

    const [cardData, setCardData] = useState([]);

    return (
        <div className="flex space-x-20 justify-center">
            {cardsData.map((card, dsc) => {
                return (
                    <Tilt>
                        <div className="h-80 w-56 bg-[var(--primary)] flex rounded-lg items-center justify-start flex-col">
                            <div className="h-8 w-8 bg-white fixed right-1 top-1 rounded-full">
                                <a href={card.repo}>
                                    <img src="github-mark.svg" />
                                </a>
                            </div>
                            <div className=" bg-[var(--secondary)] w-52 rounded-lg m-2 mb-3 ">
                                <a href={card.link}>
                                    <img
                                        className="rounded-lg"
                                        src={card.label}
                                        alt="project preview"
                                    />
                                </a>
                            </div>
                            <div className=" bg-[var(--secondary)] w-52 h-screen mb-3 rounded-lg">
                                {card.content}
                            </div>
                        </div>
                    </Tilt>
                );
            })}
        </div>
    );
}

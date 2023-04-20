import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

export default function Card() {
    const cardsData = [
        {
            label: "https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/641d79095b3c99786038f958/screenshot_2023-03-24-10-19-49-0000.png",
            content: (
                <div>
                    <h2>Kanban Board</h2>
                    <p>This is a Kanban Board</p>
                </div>
            ),
            link: "https://chimera-ant.netlify.app/",
            repo: "https://github.com/GabrielYKB/kanban-board",
        },
        {
            label: "img2",
            content: "Slack Clone",
            link: "https://kaleidoscopic-puffpuff-d3ffcd.netlify.app",
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
                        <div className="h-80 bg-[var(--primary)] flex rounded-lg items-center justify-start flex-col">
                            <div className="h-8 w-8 bg-white fixed right-1 top-1 rounded-full">
                                <a href={card.repo}>
                                    <img src="github-mark.svg" />
                                </a>
                            </div>
                            <div className=" bg-[var(--secondary)] rounded-lg m-3">
                                <a href={card.link}>
                                    <img
                                        className="rounded-lg h-28"
                                        src={card.label}
                                        alt="Project preview"
                                    />
                                </a>
                            </div>
                            <div className=" bg-[var(--secondary)] w-44 h-screen rounded-lg mb-3 text-center pt-3 text-xl text-gray-200 ">
                                {card.content}
                            </div>
                        </div>
                    </Tilt>
                );
            })}
        </div>
    );
}

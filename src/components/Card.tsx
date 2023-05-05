import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

export default function Card() {
    const cardsData = [
        {
            id: 1,
            label: "https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/641d79095b3c99786038f958/screenshot_2023-03-24-10-19-49-0000.png",
            content: (
                <div>
                    <h2 className="border-b-2 border-[var(--detail)] justify-center mx-5 pb-1 text-lg font-medium">
                        Kanban Board
                    </h2>
                    <p className="text-sm py-2 font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore, vero.
                    </p>
                </div>
            ),
            link: "https://chimera-ant.netlify.app/",
            repo: "https://github.com/GabrielYKB/kanban-board",
        },
        {
            id: 2,
            label: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64428c916669c971a1947961/screenshot_2023-04-21-13-16-26-0000.png",
            content: (
                <div>
                    <h2 className="border-b-2 border-[var(--detail)] justify-center mx-5 pb-1 text-lg font-medium">
                        Slack Clone
                    </h2>
                    <p className="text-sm py-2  font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore, vero.
                    </p>
                </div>
            ),
            link: "https://scintillating-donut-7163c5.netlify.app/",
            repo: "https://github.com/GabrielYKB/Slack-clone",
        },
        {
            id: 3,
            label: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64428c916669c971a1947961/screenshot_2023-04-21-13-16-26-0000.png",
            content: (
                <div>
                    <h2 className="border-b-2 border-[var(--detail)] justify-center mx-5 pb-1 text-lg font-medium">
                        Spotify Clone
                    </h2>
                    <p className="text-sm py-2 font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore, vero.
                    </p>
                </div>
            ),
            link: "",
            repo: "https://github.com/GabrielYKB/spotify-clone",
        },
        {
            id: 4,
            label: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64428c916669c971a1947961/screenshot_2023-04-21-13-16-26-0000.png",
            content: (
                <div>
                    <h2 className="border-b-2 border-[var(--detail)] justify-center mx-5 pb-1 text-lg font-medium">
                        Klarna Checkout
                    </h2>
                    <p className="text-sm py-2 font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore, vero.
                    </p>
                </div>
            ),
            link: "",
            repo: "https://github.com/GabrielYKB/Klarna-Checkout",
        },
    ];

    return (
        <div className="flex justify-between">
            {cardsData.map((card) => {
                return (
                    <div key={card.id}>
                        <Tilt>
                            <div className="h-96 w-56 bg-[var(--primary)] flex rounded-lg items-center justify-start flex-col mb-5">
                                {card.link ? (
                                    <a href={card.link}>
                                        <img
                                            className="rounded-lg m-3 w-48"
                                            src={card.label}
                                            alt="Project preview"
                                        />
                                    </a>
                                ) : (
                                    <img
                                        className="rounded-lg m-3 w-48"
                                        src={card.label}
                                        alt="Project preview"
                                    />
                                )}
                                <div className=" bg-[var(--secondary)] w-48  h-screen rounded-lg mb-3 text-center pt-3 text-xl text-gray-200 ">
                                    {card.content}
                                    <div className="fixed right-24 bottom-6 hover:scale-125 transition duration-300 hover:duration-300 rounded-full">
                                        <a href={card.repo}>
                                            <img
                                                src="github-mark-white.svg"
                                                className="h-8 bg-[var(--bg)] rounded-full hover:bg-[var(--detail)] transition duration-300 hover:duration-300"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                );
            })}
        </div>
    );
}

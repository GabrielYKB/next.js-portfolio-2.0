import React from "react";
import Image from "next/image";

type Props = {
    skills: Array<string>;
    desc: string;
    title: string;
    image: string;
    repo: string;
    link: string;
    id: number;
};

export default function ProjectCardRight({
    skills,
    desc,
    title,
    image,
    repo,
    link,
    id,
}: Props) {
    const style = { width: "110%" };
    return (
        <div
            className="flex text-white items-center"
            id="cards"
            data-aos="fade-up"
            key={id}
        >
            <div className="flex flex-col items-start min-w-xl max-w-xl">
                <p className="font-bold text-2xl mb-4">{title}</p>
                <div
                    className="bg-[var(--secondary)] rounded-md min-w-xl p-5 px-6 z-10"
                    style={style}
                >
                    {desc}
                </div>
                <div className="flex gap-5 text-gray-300 my-4">
                    {skills.map((skill, index) => (
                        <p key={index}>{skill}</p>
                    ))}
                </div>
                <div className="flex gap-5 items-center">
                    <a href={repo}>
                        <img
                            src="github-mark-white.svg"
                            className="w-7 transition duration-300 hover:duration-300 hover:scale-125"
                            alt=""
                        />
                    </a>
                    {link && (
                        <a href={link}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 transition duration-300 hover:duration-300 hover:scale-125"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
            <div>
                <img
                    src={image}
                    alt="Project preview"
                    className="aspect-video rounded-md"
                />
            </div>
        </div>
    );
}

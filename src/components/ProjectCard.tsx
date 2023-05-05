import React from "react";
import Image from "next/image";

type Props = {
    skills: Array<string>;
    desc: string;
    title: string;
    image: string;
    repo: string;
    link: string;
};

export default function ProjectCard({
    skills,
    desc,
    title,
    image,
    repo,
    link,
}: Props) {
    return (
        <div className="flex text-white items-center" id="cards">
            <div>
                <img src={image} alt="Project preview" className="h-96" />
            </div>
            <div className="flex flex-col items-end max-w-xl">
                <p className="font-bold text-2xl mb-4">{title}</p>
                <div className="bg-[var(--secondary)] rounded-lg p-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusantium doloribus perferendis culpa alias obcaecati
                    veniam ex laborum vel, modi quidem consequatur libero
                    voluptatem similique ducimus quisquam odit unde natus
                    voluptatum repellendus illo quibusdam eveniet repellat
                    inventore maiores? Ex distinctio, tempore animi nam velit
                    nobis neque at iusto? Ipsa, soluta adipisci.
                </div>
                <div className="flex gap-5 text-gray-300 my-4">
                    {skills.map((skill) => (
                        <p>{skill}</p>
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
                                className="w-8 transition duration-300 hover:duration-300 hover:scale-125"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

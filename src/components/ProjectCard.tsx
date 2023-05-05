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
        <div className="flex text-white" id="cards">
            <div>
                <img src={image} alt="Project preview" />
            </div>
            <div className="flex flex-col items-end">
                <p className="font-bold">{title}</p>
                <div className="bg-[var(--secondary)] rounded-lg p-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusantium doloribus perferendis culpa alias obcaecati
                    veniam ex laborum vel, modi quidem consequatur libero
                    voluptatem similique ducimus quisquam odit unde natus
                    voluptatum repellendus illo quibusdam eveniet repellat
                    inventore maiores? Ex distinctio, tempore animi nam velit
                    nobis neque at iusto? Ipsa, soluta adipisci.
                </div>
                <div className="flex gap-5 text-gray-300">
                    {skills.map((skill) => (
                        <p>{skill}</p>
                    ))}
                </div>
                <div>
                    <a href={repo}>Github</a>
                    {link && <a href={link}>Demo</a>}
                </div>
            </div>
        </div>
    );
}

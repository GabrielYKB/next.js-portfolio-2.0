import React from "react";

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
        <div className="flex" id="cards">
            <div>IMG</div>
            <div className="flex flex-col">
                <p>title</p>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusantium doloribus perferendis culpa alias obcaecati
                    veniam ex laborum vel, modi quidem consequatur libero
                    voluptatem similique ducimus quisquam odit unde natus
                    voluptatum repellendus illo quibusdam eveniet repellat
                    inventore maiores? Ex distinctio, tempore animi nam velit
                    nobis neque at iusto? Ipsa, soluta adipisci.
                </div>
                <div>
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

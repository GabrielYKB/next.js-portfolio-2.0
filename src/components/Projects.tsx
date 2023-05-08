import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardRight from "./ProjectCardRight";

type Props = {};
const PROJECTS = [
    {
        image: "Kanban.png",
        link: "https://chimera-ant.netlify.app/",
        title: "Kanban Board",
        desc: "This is a Klarna checkout",
        skills: ["Node.js", "API", "Express"],
        repo: "https://github.com/GabrielYKB/Klarna-Checkout",
    },
    {
        image: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64428c916669c971a1947961/screenshot_2023-04-21-13-16-26-0000.png",
        link: "",
        title: "Spotify Clone",
        desc: "",
        skills: ["Node.js", "API", "Express"],
        repo: "https://github.com/GabrielYKB/Klarna-Checkout",
    },
    {
        image: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64428c916669c971a1947961/screenshot_2023-04-21-13-16-26-0000.png",
        link: "",
        title: "Klarna Checkout",
        desc: "",
        skills: ["Node.js", "API", "Express"],
        repo: "https://github.com/GabrielYKB/Klarna-Checkout",
    },
    {
        image: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64428c916669c971a1947961/screenshot_2023-04-21-13-16-26-0000.png",
        link: "",
        title: "Slack Clone",
        desc: "",
        skills: ["Node.js", "API", "Express"],
        repo: "https://github.com/GabrielYKB/Klarna-Checkout",
    },
];

export default function Projects({}: Props) {
    const renderProjects = () => {
        return PROJECTS.map((project, index) =>
            index % 2 === 0 ? (
                <ProjectCard {...project} />
            ) : (
                <ProjectCardRight {...project} />
            )
        );
    };
    return <div className="flex flex-col gap-10">{renderProjects()}</div>;
}

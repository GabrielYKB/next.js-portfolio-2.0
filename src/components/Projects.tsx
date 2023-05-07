import React from "react";
import ProjectCard from "./ProjectCard";

type Props = {};
const PROJECTS = [
    {
        image: "https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/64428c916669c971a1947961/screenshot_2023-04-21-13-16-26-0000.png",
        link: "afdsf",
        title: "Klarna Checkout",
        desc: "This is a Klarna checkout",
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
        title: "Klarna Checkout",
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
];

export default function Projects({}: Props) {
    const renderProjects = () => {
        return PROJECTS.map((project) => <ProjectCard {...project} />);
    };
    return <div className="flex flex-col gap-10">{renderProjects()}</div>;
}

import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectCardRight from "./ProjectCardRight";

type Props = {};
const PROJECTS = [
    {
        id: 1,
        image: "Kanban.png",
        link: "https://chimera-ant.netlify.app/",
        title: "Kanban Board",
        desc: "My Kanban board is a web-based task management tool built using React. It features a drag-and-drop interface for easy task movement and is designed with responsive and modular architecture for extensibility and maintainability.",
        skills: ["React", "SCSS", "Typescript", "UUID"],
        repo: "https://github.com/GabrielYKB/kanban-board",
    },
    {
        id: 2,
        image: "Spotify.png",
        link: "",
        title: "Spotify Clone",
        desc: "My Spotify clone is a music streaming application built using modern web technologies like React, Spotify Web API, and TailwindCSS. It offers a user-friendly interface, as well as a comprehensive search functionality for playing music.",
        skills: ["Spotify Web API", "TailwindCSS", "React", "Next.js"],
        repo: "https://github.com/GabrielYKB/spotify-clone",
    },
    {
        id: 3,
        image: "Klarna.png",
        link: "",
        title: "Klarna Checkout",
        desc: "My Klarna Checkout clone is an e-commerce payment solution built using technologies like API, Node.js, and Express.js. It offers a streamlined checkout process for customers, with various payment options, fraud detection, and secure data handling. ",
        skills: ["Node.js", "API", "Express", "JavaScript"],
        repo: "https://github.com/GabrielYKB/Klarna-Checkout",
    },
    {
        id: 4,
        image: "Slack.png",
        link: "",
        title: "Slack Clone",
        desc: "Your Slack clone is a chat application that allows users to send and receive messages in different chat rooms. Built with React, Node.js, and Express, it offers a user-friendly interface and real-time updates for effective communication and collaboration.",
        skills: ["React", "Express", "CORS", "Mongoose"],
        repo: "https://github.com/GabrielYKB/Slack-clone",
    },
];

export default function Projects({}: Props) {
    const renderProjects = () => {
        return PROJECTS.map((project, index) =>
            index % 2 === 0 ? (
                <ProjectCard key={project.id} {...project} />
            ) : (
                <ProjectCardRight key={project.id} {...project} />
            )
        );
    };
    return <div className="flex flex-col gap-20 mb-36">{renderProjects()}</div>;
}

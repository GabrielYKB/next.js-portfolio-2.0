import { useState } from "react";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import AboutTitle from "./Titles/AboutTitle";
import ContactTitle from "./Titles/ContactTitle";
import SkillsTitle from "./Titles/SkillsTitle";
import WorkTitle from "./Titles/WorkTitle";
import Cards from "./Cards";

export default function Tabs() {
    const tabsData = [
        {
            label: <WorkTitle />,
            content: <Cards />,
        },
        {
            label: <SkillsTitle />,
            content: <Skills />,
        },
        {
            label: <AboutTitle />,
            content: <About />,
        },
        {
            label: <ContactTitle />,
            content: <Contact />,
        },
    ];

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className=" bg-[var(--bg)]  ">
            <div className="mx-72 text-white text-2xl ">
                <div className="border-b-4 border-[var(--detail)] flex justify-center mb-16">
                    {tabsData.map((tab, idx) => {
                        return (
                            <button
                                key={idx}
                                className={`py-2 transition-colors duration-300 ${
                                    idx === activeTabIndex
                                        ? "bg-[var(--detail)] rounded-t-xl px-8"
                                        : "bg-transparent rounded-t-xl px-8 hover:border-white"
                                }`}
                                onClick={() => setActiveTabIndex(idx)}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </div>
                <div className="py-4">{tabsData[activeTabIndex].content}</div>
            </div>
        </div>
    );
}

import { useState } from "react";
import Skills from "./Skills";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";

export default function Tabs() {
    const tabsData = [
        {
            label: "My Skills",
            content: <Skills />,
        },
        {
            label: "Contact",
            content: <Contact />,
        },
        {
            label: "About me",
            content: <About />,
        },
        {
            label: "My Projects",
            content: <Work />,
        },
    ];

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className=" bg-[var(--bg)] pb-10 ">
            <div className="mx-72 text-white text-2xl ">
                <div className="border-b-4 border-violet-500 flex justify-center mb-16">
                    {tabsData.map((tab, idx) => {
                        return (
                            <button
                                key={idx}
                                className={`py-2 transition-colors duration-300 ${
                                    idx === activeTabIndex
                                        ? "bg-violet-500 rounded-t-xl px-8"
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

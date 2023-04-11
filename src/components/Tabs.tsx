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
        <div className=" bg-[var(--bg)] h-max">
            <div className="mx-72 text-white text-2xl ">
                <div className="border-b-2 border-violet-500 space-x-10 flex justify-center mb-16">
                    {tabsData.map((tab, idx) => {
                        return (
                            <button
                                key={idx}
                                className={`py-2 border-b-4 transition-colors duration-300 ${
                                    idx === activeTabIndex
                                        ? "border-teal-500"
                                        : "border-transparent hover:border-gray-200"
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

import { useState } from "react";
import Skills from "./Skills";

export default function Tabs() {
    const tabsData = [
        {
            label: "My Skills",
            content: <Skills />,
        },
        {
            label: "Contact",
            content: "gabriel.yakooub@gmail.com",
        },
        {
            label: "About me",
            content: "I'm a passionate developer",
        },
    ];

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className="mx-72 text-white text-2xl">
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
    );
}

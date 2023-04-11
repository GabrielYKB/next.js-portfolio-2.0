import { useState } from "react";
import Skills from "./Skills";

export default function Tabs() {
    const tabsData = [
        {
            label: "My Skills",
            content: "Frontend and backend developer",
        },
        {
            label: "Contact",
            content: <Skills />,
        },
        {
            label: "About me",
            content: "I'm a passionate developer",
        },
    ];

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className="text-white">
            <div className="flex space-x-3 border-b">
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
            <div className="py-4">
                <p>{tabsData[activeTabIndex].content}</p>
            </div>
        </div>
    );
}

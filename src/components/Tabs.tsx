import { useState } from "react";

export default function Tabs() {
    const tabsData = [
        {
            label: "My Skills",
            content: "Frontend and backend developer",
        },
        {
            label: "Contact",
            content: "My Email, number and address information",
        },
        {
            label: "About me",
            content: "I'm a passionate developer",
        },
    ];

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return <div>Tabs</div>;
}

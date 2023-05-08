import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";

const ScrollDownIndicator: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.pageYOffset;
            const screenHeight = window.innerHeight;

            if (currentScrollPosition > screenHeight * 0.2) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <div
                    className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity  duration-500 opacity-100`}
                >
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        offset={-100}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 text-gray-500 animate-bounce cursor-pointer hover:bg-gray-300 rounded-full duration-300 hover:duration-300 hover:bg-opacity-20"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 14a1 1 0 01-.71-.29l-3.5-3.5a1 1 0 011.42-1.42L10 11.59l3.29-3.3a1 1 0 011.42 1.42l-3.5 3.5A1 1 0 0110 14z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            )}
        </>
    );
};

export default ScrollDownIndicator;

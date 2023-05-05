import React from "react";
import { Link } from "react-scroll";
import Cards from "./Cards";

export default function Navbar() {
    return (
        <nav>
            <div className="flex justify-center h-16 fixed">
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    1. About
                </Link>
                <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    2. Skills
                </Link>
                <Link
                    to="cards"
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    3. Work
                </Link>

                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    4. Contact
                </Link>
            </div>
        </nav>
    );
}

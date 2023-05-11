import { Link } from "react-scroll";

export default function Navbar() {
    return (
        <div className="text-white flex justify-between py-3">
            <div className="">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="text-gray-300 hover:text-white rounded-md text-sm font-medium"
                    offset={-300}
                >
                    Home
                </Link>
            </div>
            <nav className="flex  ">
                <div className="flex gap-6">
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="text-gray-300 hover:text-white rounded-md text-sm font-medium"
                        offset={-100}
                    >
                        About
                    </Link>

                    <Link
                        to="cards"
                        smooth={true}
                        duration={500}
                        className="text-gray-300 hover:text-white rounded-md text-sm font-medium"
                        offset={-120}
                    >
                        Work
                    </Link>

                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="text-gray-300 hover:text-white  rounded-md text-sm font-medium"
                        offset={-200}
                    >
                        Contact
                    </Link>
                </div>
            </nav>
        </div>
    );
}

import React from "react";
import { Link } from "@react-email/link";

const Email = () => {
    return (
        <Link href="Mailto:Gabriel.yakooub@gmail.com">
            Gabriel.yakooub@gmail.com
        </Link>
    );
};

export default function Contact() {
    return (
        <div id="contact" className="flex justify-between h-96 text-white">
            <div className="text-2xl font-medium">
                <div className="flex mb-16 text-2xl font-semibold text-white">
                    <h3>4. Contact information</h3>
                </div>
                <div className="flex items-center gap-2 text-xl font-normal">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5"
                    >
                        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                    </svg>
                    <Email />
                </div>
                <div className="flex items-center gap-2 text-xl font-normal">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <p>070-070 11 17</p>
                </div>
            </div>
            <div>
                <div className="pb-2 text-2xl font-medium">
                    <p>Social profiles:</p>
                </div>

                <div className="flex gap-5 ">
                    <a href="https://www.linkedin.com/in/gabriel-yakoub-65ab74185/">
                        <img
                            src="linkedin.svg"
                            className="h-8 bg-[var(--bg)] rounded-full hover:bg-[var(--detail)] transition duration-300 hover:duration-300 hover:scale-125 "
                        />
                    </a>
                    <a href="https://github.com/GabrielYKB">
                        <img
                            src="github-mark-white.svg"
                            className="h-8 bg-[var(--bg)] rounded-full hover:bg-[var(--detail)] transition duration-300 hover:duration-300 hover:scale-125 "
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

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
        <div id="contact" className="h-96 text-white" data-aos="fade-up">
            <div className="mb-16 text-2xl font-semibold text-white flex items-center gap-5">
                <h3 className="flex items-center gap-8">
                    Get in touch!
                    <div className="h-0.5 w-96 bg-[var(--detail)] relative top-1" />
                </h3>
            </div>
            <div className="flex justify-center bg-red-500"></div>
        </div>
    );
}

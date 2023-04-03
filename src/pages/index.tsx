import Intro from "@/components/Intro";
import React from "react";
import Navbar from "@/components/Navbar";

type Props = {};

export default function index({}: Props) {
    return (
        <div className="bg-[var(--bg)] h-screen">
            <Navbar />
            <Intro />
        </div>
    );
}

import React from "react";
import Navbar from "@/components/Navbar";
import MainPage from "@/components/MainPage";
import Card from "@/components/Card";

export default function index() {
    return (
        <div className="bg-[var(--bg)] h-screen">
            <Navbar />
            <MainPage />
        </div>
    );
}

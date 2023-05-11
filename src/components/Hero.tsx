import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="">
            <Image
                src="/kahp.jpg"
                width={500}
                height={700}
                alt="Hero"
                className="rounded-xl"
            />
        </div>
    );
}

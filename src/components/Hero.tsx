import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="w-72 rounded right-40">
            <Image src="/kahp.jpg" width={400} height={600} alt="Hero" />
            {/* <img src="/kahp.jpg" className="w-72 rounded" /> */}
        </div>
    );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: "ease-out-cubic",
            delay: 200,
            once: true,
        });
    }, []);

    return <Component {...pageProps} />;
}

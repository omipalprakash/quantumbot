"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Future = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const video = document.querySelector("video");
        if (video) {
            video.addEventListener("loadeddata", () => setIsVideoLoaded(true));
        }
        return () => {
            if (video) {
                video.removeEventListener("loadeddata", () => setIsVideoLoaded(true));
            }
        };
    }, []);

    return (
        <div className="relative w-full overflow-hidden sm:overflow-visible">
            <hr className="border-0 bg-[linear-gradient(270deg,_rgba(255,_255,_255,_0.00)_0%,_#FFF_52.07%,_rgba(255,_255,_255,_0.00)_100%)] z-[1] opacity-[0.15] relative h-[1px] w-full max-w-[1006px] mx-auto" />
            <div className="absolute z-10 -translate-x-1/2 -top-10 left-1/2 py-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="object-scale-down w-[700px] translate-y-[85px] -translate-x-12 xl:w-[870px] xl:translate-y-14 xl:-translate-x-16 pointer-events-none select-none transform transition-transform duration-1000 aspect-[1400/650]"
                >
                    <video autoPlay playsInline loop muted preload="auto" poster="/assets/images/scale-ai-poster.jpg" className="w-full h-full object-cover hidden lg:block" >
                        <source src="/assets/videos/footer-video.mp4" type="video/mp4;codecs=hvc1" />
                        <source src="/assets/videos/footer-video.webm" type="video/webm" />
                    </video>
                    <img src="/assets/images/scale-ai-poster.jpg" alt="Scale AI Poster" className="w-full h-auto max-h-80 object-scale-down lg:hidden" />
                </motion.div>
            </div>

            <section
                id="future-section"
                className="py-18 lg:py-20 bg-transparent !pb-28 !pt-[110px] md:!pb-36 md:!pt-[132px]"
            >
                <div className="container relative z-10 sm:px-0">
                    <div className="max-w-[760px] w-fit space-y-6 lg:space-y-10 mx-auto">
                        <div className="relative">
                            <h2 className="relative text-5xl font-light xl:leading-none leading-tight mx-auto sm:leading-[1.1] sm:text-7xl xl:text-[89px] tracking-[-0.89px] font-aeonik text-center">
                                <span className="inline">The future of your industry </span>
                                <span className="highlight text-gradient-2023">
                                    starts&nbsp;here.
                                </span>
                            </h2>
                        </div>
                        <div className="justify-center lg:pt-4 flex items-center gap-x-6">
                            <a
                                href="/demo"
                                aria-label="Book a Demo"
                                className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                            >
                                <div className="new-button_button--primary font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full leading-[150%] new-button_button--purple text-sm px-[30px] py-[14px]">
                                    Book a Demo
                                    <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                                        →
                                    </span>
                                </div>
                                <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(105,57,193,0.4)]" />
                            </a>
                            <a
                                href="/data-engine"
                                aria-label="Build AI"
                                className="text-[#F4F0FF] hover:text-white transition-colors duration-300 py-2 font-medium whitespace-nowrap text-sm leading-5 group relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                            >
                                Build AI
                                <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Future;

"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedTextReveal } from "./AnimatedTextReveal";
import "./banner.css";


const Banner = () => {
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
        <section className="hero relative flex flex-col items-center justify-center text-white text-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full -z-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="object-scale-down pointer-events-none select-none transform transition-transform duration-1000 aspect-[1400/650]"
                >
                    <video autoPlay loop muted playsInline poster="/assets/images/scale-ai-poster.jpg" className="w-full h-full object-cover hidden lg:block">
                        <source src="/assets/videos/footer-video.mp4" type="video/mp4;codecs=hvc1" />
                        <source src="/assets/videos/footer-video.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                    <img src="/assets/images/scale-ai-poster.jpg" alt="Scale AI Poster" className="w-full h-auto max-h-80 object-scale-down lg:hidden" />
                </motion.div>
            </div>

            <div className="pt-24 xl:pt-44">
                <div className="relative z-10 container">
                    <h1 className="text-[2.7rem] font-light sm:leading-none leading-[1.1] sm:text-7xl xl:text-[89px] tracking-[-0.89px] font-aeonik text-center" style={{ textShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.35)' }}>Power <br className="lg:hidden" />
                        <span className="relative">
                            <span className="invisible">Government&nbsp;AI</span>
                            <div className="hero_cubespinner">
                                <div className="hero_face1">Enterprise&nbsp;AI</div>
                                <div className="hero_face2">Government&nbsp;AI</div>
                                <div className="hero_face3">Generative&nbsp;AI</div>
                            </div>
                        </span>
                        <br /> With Your&nbsp;Data
                    </h1>
                    <h2 className="my-6 font-sans text-base text-[#F5F5F5] sm:px-0 font-medium leading-normal lg:my-[22px] lg:text-lg md:w-11/12 lg:w-full text-center lg:max-w-[860px] mx-auto">Make the best models with the best data. Scale Data Engine powers nearly every major foundation model, and with Scale GenAI Platform, leverages your enterprise data to unlock the value of AI.</h2>
                    <div className="items-center w-full mx-auto space-x-6 md:mb-0 xl:mb-9 max-w-max">
                        <a style={{ WebkitTapHighlightColor: 'transparent' }} className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block" href="demo.html">
                            <div className="new-button_button--primary font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple text-sm px-[30px] py-[14px]">Book a Demo <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">→</span>
                            </div>
                            <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(105,57,193,0.4)]" />
                        </a>
                        <a style={{ WebkitTapHighlightColor: 'transparent' }} className="text-[#F4F0FF] hover:text-white transition-colors duration-300 py-2 font-medium whitespace-nowrap text-sm leading-5 group relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block" href="data-engine.html">Build AI <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">→</span>
                        </a>
                    </div>
                </div>
                <AnimatedTextReveal />
            </div>

        </section>



    )
}

export default Banner;
"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";

const Applications = () => {
    const [activeIndex, setActiveIndex] = useState(0); // ✅ Track active slide

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "snap",
        slides: { perView: 1, spacing: 10 },
        slideChanged(s) {
            setActiveIndex(s.track.details.rel); // ✅ Update active index when slide changes
        }
    });

    return (
        <section className="py-18 lg:py-20 bg-transparent relative">
            <div className="container lg:max-w-[1344px] mx-auto relative px-6 sm:px-10 lg:px-0">
                {/* Background Gradient */}
                <div className="select-none pointer-events-none absolute top-0 -left-[10%] -right-[10%] bottom-[9%] opacity-50 bg-gradient_background__GEkO8 bg-gradient_background-blue__fhjbE"></div>

                {/* Section Header */}
                <div className="flex flex-col max-w-3xl mx-auto text-center mb-12 md:mb-16 relative z-10 justify-center items-center">
                    <div className="mb-5 lg:mb-5 tracking-[3px] text-xs uppercase bg-white bg-opacity-5 text-[#7B8FDD] rounded-full px-4 py-2 inline-block">
                        <span>Apply AI</span>
                    </div>
                    <h2 className="font-aeonik text-3xl md:text-4.5xl lg:text-5xl leading-snug lg:leading-[1.25]">
                        Generative AI Applications
                    </h2>
                    <p className="mt-4 lg:mt-2 text-neutral-100 lg:text-gray-300 lg:text-xl leading-[1.6]">
                        Easily Apply AI to your most challenging use cases with pre‑built applications
                        that harness the power of customized LLMs.
                    </p>
                </div>

                {/* Mobile Slider (Below xl) */}
                <div className="relative w-full px-4 sm:px-0 block lg:hidden">
                    <div ref={sliderRef} className="keen-slider pb-16 !overflow-visible">
                        {/* Slide 1 */}
                        <a className="keen-slider__slide" href="/donovan">
                            <div className="box_box__wrapper__7yWdR box_box__wrapper--hoverable___A4_d box_box-blue__FPEs4 before:z-20">
                                <div className="relative z-10 p-6 pt-9 md:pt-12 rounded-2xl min-h-[450px] lg:min-h-[540px]">
                                    <p className="uppercase text-xs tracking-[4px] mb-4 lg:mb-6">Scale Donovan</p>
                                    <p className="text-3.5xl md:text-[1.625rem] leading-tight mb-2 font-aeonik">
                                        AI-Powered Decision-Making for Defense
                                    </p>
                                    <p className="mb-8 text-zinc-400">AI-powered decision-making support: plan, analyze, and act in minutes.</p>
                                    <Image
                                        alt="Scale Donovan"
                                        width={575}
                                        height={383}
                                        className="absolute left-6 md:left-9 top-46 md:top-auto md:-bottom-32 lg:bottom-0 aspect-[436/276] w-full h-full md:h-auto overflow-hidden object-contain xl:-bottom-[85px] object-left-top"
                                        src="/assets/images/donovan-map.webp"
                                    />
                                </div>
                            </div>
                        </a>

                        {/* Slide 2 */}
                        <a className="keen-slider__slide" href="/genai-platform">
                            <div className="box_box__wrapper__7yWdR box_box__wrapper--hoverable___A4_d box_box-blue__FPEs4 before:z-20">
                                <div className="relative z-10 p-6 pt-9 md:pt-12 rounded-2xl min-h-[450px] lg:min-h-[540px]">
                                    <p className="uppercase text-xs tracking-[4px] mb-4 lg:mb-6">Scale GenAI Platform</p>
                                    <p className="text-3.5xl md:text-[1.625rem] leading-tight mb-2 font-aeonik">
                                        AI for the Enterprise
                                    </p>
                                    <p className="mb-8 text-zinc-400">Transform your data into customized enterprise-ready Generative AI applications.</p>
                                    <Image
                                        alt="Gen AI"
                                        width={575}
                                        height={383}
                                        className="absolute left-6 md:left-9 top-46 md:top-auto md:-bottom-32 lg:bottom-0 aspect-[436/276] w-full h-full md:h-auto overflow-hidden object-contain xl:-bottom-[85px] object-left-top"
                                        src="/assets/images/gen-ai.webp"
                                    />
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Pagination (Visible below md breakpoint) */}
                    <div className="lg:hidden flex justify-center relative mx-auto mt-8 max-w-max gap-3">
                        {Array.from({ length: 2 }).map((_, idx) => (
                            <button
                                key={idx}
                                className={`h-1 sm:h-1.5 md:h-2 rounded-full transition-all duration-300 
                                    ${activeIndex === idx
                                        ? "bg-white w-3 sm:w-4 h-1.5 sm:h-2"  // Active bullet: bigger & fully white
                                        : "bg-white/40 w-1 sm:w-1.5 h-1 sm:h-1.5" // Inactive bullet: smaller & faded
                                    }`}
                                onClick={() => {
                                    setActiveIndex(idx); // ✅ Update activeIndex
                                    instanceRef.current?.moveToIdx(idx);
                                }}
                            >
                            </button>
                        ))}
                    </div>
                </div>

                {/* Desktop Static Layout (xl+) */}
                <div className="hidden lg:flex gap-8 justify-center">
                    {/* Slide 1 */}
                    <a href="/donovan" className="w-1/2 flex">
                        <div className="box_box__wrapper__7yWdR box_box__wrapper--hoverable___A4_d box_box-blue__FPEs4 p-6 rounded-2xl">
                            <p className="uppercase text-xs tracking-[4px] mb-4 lg:mb-6">Scale Donovan</p>
                            <p className="text-3.5xl md:text-[1.625rem] leading-tight mb-2 font-aeonik">
                                AI-Powered Decision-Making for Defense
                            </p>
                            <p className="mb-8 text-zinc-400">Transform your data into customized enterprise-ready Generative AI applications.</p>
                            <Image
                                alt="Scale Donovan"
                                width={575}
                                height={383}
                                className="w-full h-auto object-contain"
                                src="/assets/images/donovan-map.webp"
                            />
                        </div>
                    </a>

                    {/* Slide 2 */}
                    <a href="/genai-platform" className="w-1/2 flex">
                        <div className="box_box__wrapper__7yWdR box_box__wrapper--hoverable___A4_d box_box-blue__FPEs4 p-6 rounded-2xl">
                            <p className="uppercase text-xs tracking-[4px] mb-4 lg:mb-6">Scale GenAI Platform</p>
                            <p className="text-3.5xl md:text-[1.625rem] leading-tight mb-2 font-aeonik">
                                AI for the Enterprise
                            </p>
                            <p className="mb-8 text-zinc-400">Transform your data into customized enterprise-ready Generative AI applications.</p>
                            <Image
                                alt="Gen AI"
                                width={575}
                                height={383}
                                className="w-full h-auto object-contain"
                                src="/assets/images/gen-ai.webp"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Applications;

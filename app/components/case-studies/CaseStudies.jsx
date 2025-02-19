"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

const cases = [
    {
        link: "#",
        icon: "/assets/images/scale-and-openai.webp",
        title: "Partner",
        description: "OpenAI Names Scale as Preferred Fine-Tuning Partner",
    },
    {
        link: "#",
        icon: "/assets/images/scale-and-anthropic.webp",
        title: "Partner",
        description: "Anthropic Partners with Scale to Bring Generative AI to Enterprises",
    },
    {
        link: "#",
        icon: "/assets/images/scale-and-meta.webp",
        title: "Partner",
        description: "Meta and Scale Partner to Drive Enterprise Adoption of Llama",
    },
    {
        link: "#",
        icon: "/assets/images/scale-and-cohere.webp",
        title: "Partner",
        description: "Customer Case Study: Cohere",
    },
    {
        link: "#",
        icon: "/assets/images/seal-leaderboards.webp",
        title: "Partner",
        description: "Scale's SEAL Research Lab Launches Expert-Evaluated LLM Leaderboards",
    },
    {
        link: "#",
        icon: "/assets/images/mark.webp",
        title: "Partner",
        description: "Why Is ChatGPT So Good?",
    },
    {
        link: "#",
        icon: "/assets/images/map-bg.webp",
        title: "Partner",
        description: "Open Dataset: Ukraine Damage Identification",
    },
    {
        link: "#",
        icon: "/assets/images/chakra.webp",
        title: "Partner",
        description: "Meet Claude: Anthropic’s rival to ChatGPT",
    },
];

const CaseStudies = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [sliderRef] = useKeenSlider({
        loop: false,
        mode: "free-snap",
        rubberband: false,
        slides: { perView: 3, spacing: 25 },
        breakpoints: {
            "(max-width: 1024px)": { slides: { perView: 2, spacing: 20 } },
            "(max-width: 768px)": { slides: { perView: 1.5, spacing: 15 } },
            "(max-width: 575px)": { slides: { perView: 1, spacing: 15 } },
        },
    });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="case py-24 overflow-x-hidden">
            <div className="container relative">
                {/* Heading Section */}
                <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20">
                    <div className="mb-5 overflow-hidden tracking-[3px] text-xs px-5 py-2 lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-full">
                        <span>LEARN HOW WE SERVE ENTERPRISES LARGE AND SMALL</span>
                    </div>
                    <h2 className="font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4xl lg:text-5xl">
                        Case Studies & Resources
                    </h2>
                    <p className="mt-4 leading-[1.6] text-gray-300 lg:text-xl">
                        We've worked with the world's leading AI teams for years, and
                        delivered more high-quality data than anybody else.
                    </p>
                </div>

                {/* Slider Section */}
                <div className="relative z-0">
                    <div className="select-none pointer-events-none absolute -top-[80%] -bottom-[20%] inset-0 opacity-30 bg-gradient_background__GEkO8 bg-gradient_background-white__Sf_QC"></div>
                    <div>
                        <div
                            ref={sliderRef}
                            className={`keen-slider !overflow-visible cursor-grab h-full transition-opacity duration-700 ${isVisible ? "opacity-100 visible" : "opacity-0 invisible"
                                }`}
                        >
                            {cases.map((data, index) => (
                                <a
                                    className="keen-slider__slide block focus:outline-none"
                                    href={data.link !== "#" ? data.link : undefined}
                                    key={index}
                                    aria-label={data.description}
                                >
                                    <div className="aspect-[389/243] rounded-lg relative z-10 bg-black overflow-hidden">
                                        <Image
                                            alt={data.description}
                                            loading={index === 0 ? "eager" : "lazy"}
                                            width={640}
                                            height={402}
                                            decoding="async"
                                            data-nimg={1}
                                            className="object-cover w-full h-full rounded-lg"
                                            style={{ color: "transparent" }}
                                            src={data.icon}
                                        />
                                    </div>
                                    <div className="relative z-20 pt-6">
                                        <p className="text-sm font-medium leading-[1.71] text-[#D1AAD7]">
                                            {data.title}
                                        </p>
                                        <h5 className="line-clamp-2 text-2xl leading-[1.33] mt-1">
                                            {data.description}
                                        </h5>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;

"use client"

import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useState } from "react"

const items = [
    {
        category: "Leaderboards",
        title: "SEAL Leaderboards: Expert-Driven Private Evaluations",
        icon: "/assets/images/leaderboards.webp",
    },
    {
        category: "Research",
        title: "LLMs Easily Jailbroken as Browser Agents",
        icon: "/assets/images/browser-art.webp",
    },
    {
        category: "Research",
        title: "Multi-Turn Human Jailbreaks on LLM Defenses",
        icon: "/assets/images/lock.webp",
    },
    {
        category: "Research",
        title: "Bonmero Analysis: Unlocking Deep Insights",
        icon: "/assets/images/bonmero.webp",
    },
    {
        category: "Research",
        title: "Advanced FX Techniques in Modern Research",
        icon: "/assets/images/fx.webp",
    },
    {
        category: "Research",
        title: "Goal-Oriented Strategies for Breakthroughs",
        icon: "/assets/images/goal.webp",
    },
]

const ResearchSlider = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [sliderRef] = useKeenSlider({
        loop: false,
        mode: "snap",
        slides: { perView: "auto", spacing: 15 },
    })

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className="bg-transparent overflow-hidden">
            <div className="container relative">
                <div
                    ref={sliderRef}
                    className={`keen-slider !overflow-visible cursor-grab h-[140px] sm:h-[167px] xl:h-[192px] pt-1 transition-opacity duration-500 ${isVisible ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                >
                    {items.map((item, index) => (
                        <a
                            className="research-slider_event-card keen-slider__slide group rounded-2xl relative text-left !opacity-100 !visible focus-visible:outline outline-[rgba(255,255,255,0.64)] outline-offset-[3px] bg-white/[0.01] min-w-[467.2px] max-w-[467.2px] flex justify-center before:content-[''] before:absolute before:inset-0 before:bg-[rgba(7,7,7,0.6)] before:backdrop-blur-[10px] before:-z-10 after:content-[''] after:absolute after:inset-0 after:z-[1] after:bg-[hsla(0,0%,100%,0.02)] after:shadow-[inset_0_24px_48px_0_rgba(199,211,234,0.05),inset_0_1px_1px_0_rgba(199,211,234,0.12)] after:border after:border-[rgba(209,170,215,0.06)] after:transition-all after:duration-300 after:ease-in-out"
                            href="#"
                            key={index}
                        >
                            <div className="flex items-center xl:items-start xl:py-8 justify-start h-full transition-colors bg-[#D1AAD7]/[0.01]">
                                <Image
                                    alt={item.category}
                                    src={item.icon || "/placeholder.svg"}
                                    width={120}
                                    height={106}
                                    loading="lazy"
                                    decoding="async"
                                    sizes="(min-width: 1280px) 120px, (min-width: 640px) 120px, 120px"
                                    className="max-w-[120px] w-full sm:max-w-[120px] xl:max-w-max px-2 lg:px-5"
                                    style={{ color: "transparent" }}
                                />
                                <div className="flex flex-col pr-2.5 sm:pr-4 lg:pr-10">
                                    <p className="mb-1 text-xs font-medium sm:text-sm text-scale-lightmauve">{item.category}</p>
                                    <p className="font-aeonik text-lg leading-6 sm:text-xl lg:text-2xl lg:leading-[27px] line-clamp-2 xl:line-clamp-3">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                            <div role="none" className="absolute items-center duration-150 overflow-hidden justify-center w-6 h-6 group-hover:bg-white bg-white/10 border group-hover:border-white transition-colors ease-linear border-white/[0.13] flex rounded-full pointer-events-none right-3 bottom-3 sm:right-4 sm:bottom-4 sm:w-10 sm:h-10">
                                <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g><path className="transition-colors duration-150 ease-linear group-hover:stroke-black" d="M7.75 7.5V4.25H4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path className="transition-colors duration-150 ease-linear group-hover:stroke-black" d="M7.5 4.5L0.75 11.25" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path className="transition-colors duration-150 ease-linear group-hover:stroke-black" d="M5.785 10.25H8.75C9.855 10.25 10.75 9.355 10.75 8.25V2.75C10.75 1.645 9.855 0.75 8.75 0.75H3.75C2.645 0.75 1.75 1.645 1.75 2.75V6.215" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>

                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ResearchSlider



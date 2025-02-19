"use client";

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { CATEGORIES } from "../../data/categories";


const logos = [
    { src: "/assets/images/microsoft.webp", alt: "Logo 1" },
    { src: "/assets/images/meta.webp", alt: "Logo 2" },
    { src: "/assets/images/openai.png", alt: "Logo 3" },
    { src: "/assets/images/cohere.webp", alt: "Logo 4" },
    { src: "/assets/images/nvidia.webp", alt: "Logo 5" },
    { src: "/assets/images/adept.webp", alt: "Logo 6" },
    { src: "/assets/images/characterai.webp", alt: "Logo 7" },
    { src: "/assets/images/nvidia.webp", alt: "Logo 8" },
    { src: "/assets/images/nvidia.webp", alt: "Logo 9" },


]




export function AnimatedTextReveal() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [progress, setProgress] = useState(0)
    const [animationComplete, setAnimationComplete] = useState(false)

    const updateIndex = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % CATEGORIES.length)
        setProgress(0)
        setAnimationComplete(false)
    }, [])

    const updateProgress = useCallback(() => {
        setProgress((prev) => {
            const newProgress = Math.min(prev + 1, 100)
            if (newProgress === 100) {
                setAnimationComplete(true)
            }
            return newProgress
        })
    }, [])

    useEffect(() => {
        const interval = setInterval(updateIndex, 6000) // 6 seconds per category
        const progressInterval = setInterval(updateProgress, 60) // Update progress every 60ms

        return () => {
            clearInterval(interval)
            clearInterval(progressInterval)
        }
    }, [updateIndex, updateProgress])

    const handleCategoryClick = (index) => {
        setCurrentIndex(index)
        setProgress(0)
        setAnimationComplete(false)
    }

    return (
        <>
            <section id="" className="py-18 lg:py-20 bg-transparent pt-0 lg:pt-0 pb-0 lg:pb-0 relative">
                <div className="relative">
                    <div className="pt-6 pb-12 sm:pb-16 sm:pt-20 xl:pb-16 xl:pt-24">
                        <div className="hidden mb-12 text-sm leading-6 text-center text-neutral-400 lg:block">
                            Scale works with{" "}
                            {CATEGORIES.map((category, index) => (
                                <span key={category.name}>
                                    {index > 0 && (index === CATEGORIES.length - 1 ? " & " : ", ")}
                                    <button
                                        className={`section-title inline-block relative cursor-pointer transition-colors duration-300 ${currentIndex === index ? "text-white" : "hover:text-neutral-200"
                                            }`}
                                        type="button"
                                        onClick={() => handleCategoryClick(index)}
                                    >
                                        {category.name}
                                        <div
                                            className={`transition-opacity duration-300 absolute bottom-0 h-[1px] w-full bg-silver ${currentIndex === index ? "opacity-100" : "opacity-0"
                                                }`}
                                        ></div>
                                        <div
                                            className={`line absolute bottom-0 h-[1px] w-full bg-white origin-left ${currentIndex === index ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                                                }`}
                                            style={{
                                                transition: "opacity 300ms, transform 6000ms linear",
                                            }}
                                        ></div>
                                    </button>
                                </span>
                            ))}
                        </div>
                        <div className="relative hidden lg:block h-14">
                            {CATEGORIES.map((category, index) => (
                                <div
                                    key={category.name}
                                    className={`Marquee FirstRow logos absolute w-full top-1/2 -translate-y-1/2 transition-opacity duration-700 ${currentIndex === index ? "opacity-100 delay-300" : "opacity-0"
                                        }`}
                                >
                                    <div className="relative grid text-white">
                                        <ul className="items-center  md:gap-y-16 justify-between flex lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-4 grid-cols-4 gap-12 gap-y-10">
                                            {category.logos.map((item) => (
                                                <li key={item.name} className="flex justify-center items-center">
                                                    <div className="relative">
                                                        <Image
                                                            alt={item.name}
                                                            width={item.width || 100}
                                                            height={item.height || 22}
                                                            src={item.logo || "/placeholder.svg"}
                                                            className="logo-grid_full-white__9DeNP"
                                                        />
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Small Screen Marquee */}


                        <div className="lg:hidden">
                            <p className="mb-10 text-sm leading-6 text-center text-gray-400">
                                Scale works with{/* */} {/* */}Generative AI Companies{/* */}, {/* */}U.S. Government Agencies{/* */} &amp;&nbsp;{/* */}Enterprises
                            </p>
                            <div className="relative w-screen -translate-x-1/2 left-1/2 h-[47px]">
                                <div className="w-full overflow-hidden py-4">
                                    <div className="flex animate-marquee">
                                        {logos.concat(logos).map((logo, index) => (
                                            <div key={index} className="mx-4 flex w-[100px] flex-shrink-0 items-center">
                                                <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} width={100} height={50} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

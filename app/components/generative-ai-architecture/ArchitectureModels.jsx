"use client"
import React, { useState } from "react"

const modelData = [
    {
        title: "Fine-Tuning and RLHF",
        description:
            "Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs and data from your enterprise.",
        video: "/assets/videos/rlhf.webm",
    },
    {
        title: "Foundation Models",
        description:
            "Scale partners or integrates with all of the leading AI models, from open-source to closed-source, including OpenAI, Google, Meta, Cohere, and more.",
        image: "/assets/images/foundation-models.png",
    },
    {
        title: "Enterprise Data",
        description:
            "Scale's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.",
        image: "/assets/images/data-engine.png",
    }
]

// Default video when no hover
const defaultVideo = "/assets/videos/chart.webm"

const ArchitectureModels = () => {
    const [hoverIndex, setHoverIndex] = useState(null) // Fixed: Removed TypeScript issue

    return (
        <div className="flex justify-center flex-col mb-24 md:mb-40 xl:mb-16  mx-auto xl:flex-row mt-28 xl:mt-0 gap-10 items-center">
            {/* Left Text Section */}
            <div className="relative z-10 w-full xl:w-6/12 xl:min-w-[50%]">
                <div className="relative z-10 hidden w-full -mr-9 xl:inline-block xl:w-6/12 xl:min-w-[510px]">
                    {modelData.map((model, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer transition-all border-b border-white/10 pb-4 ${hoverIndex === index ? 'text-white' : 'text-gray-500'
                                }`}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <p className={`text-2xl pt-6 pb-2 font-semibold ${hoverIndex === index ? 'text-white' : 'text-gray-400'}`}>
                                {model.title}
                            </p>
                            <p className={`${hoverIndex === index ? 'text-white' : 'text-gray-600'}`}>
                                {model.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Image/Video Section */}
            <div className="relative z-10 w-full max-w-[624px] aspect-[1.3/1.5]">
                <div className="relative w-full h-full">
                    {/* Default Video (chart.webm) when no hover is active */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={`absolute w-full h-full object-cover top-0 transition-opacity  ${hoverIndex === null ? "opacity-100" : "opacity-0"}`}
                    >
                        <source src={defaultVideo} type="video/webm" />
                    </video>

                    {modelData.map((model, index) => (
                        <React.Fragment key={index}>
                            {/* Image Display */}
                            {model.image && (
                                <img
                                    src={model.image}
                                    alt=""
                                    className={`absolute w-full h-full top-0 object-cover transition-opacity duration-300 ${hoverIndex === index ? "opacity-100" : "opacity-0"}`}
                                />
                            )}
                            {/* Video Display */}
                            {model.video && (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className={`absolute w-full h-full object-cover top-0 transition-opacity duration-300 ${hoverIndex === index ? "opacity-100" : "opacity-0"}`}
                                >
                                    <source src={model.video} type="video/webm" />
                                </video>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArchitectureModels

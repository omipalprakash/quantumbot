"use client";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";

const testimonial = [
    {
        title: "Mark Zuckerberg",
        description: "We partnered with Scale AI to work with Enterprises to adopt Llama and train custom models with their own data. We are excited to collectively make Llama the industry standard and bring the benefits of AI to everyone.",
        designation: "Founder and CEO Meta",
    },
    {
        title: "Mark Zuckerberg",
        description: "We partnered with Scale AI to work with Enterprises to adopt Llama and train custom models with their own data. We are excited to collectively make Llama the industry standard and bring the benefits of AI to everyone.",
        designation: "Founder and CEO Meta",
    },
    {
        title: "Mark Zuckerberg",
        description: "We partnered with Scale AI to work with Enterprises to adopt Llama and train custom models with their own data. We are excited to collectively make Llama the industry standard and bring the benefits of AI to everyone.",
        designation: "Founder and CEO Meta",
    },
    {
        title: "Mark Zuckerberg",
        description: "We partnered with Scale AI to work with Enterprises to adopt Llama and train custom models with their own data. We are excited to collectively make Llama the industry standard and bring the benefits of AI to everyone.",
        designation: "Founder and CEO Meta",
    },
    {
        title: "Mark Zuckerberg",
        description: "We partnered with Scale AI to work with Enterprises to adopt Llama and train custom models with their own data. We are excited to collectively make Llama the industry standard and bring the benefits of AI to everyone.",
        designation: "Founder and CEO Meta",
    },
];

const customers = [
    { icon: "/assets/images/meta.svg", width: "139", height: "28" },
    { icon: "/assets/images/deepmind.svg", width: "141", height: "33" },
    { icon: "/assets/images/surekha.webp", width: "150", height: "40" },
    { icon: "/assets/images/openai.svg", width: "148", height: "40" },
    { icon: "/assets/images/nfdg.svg", width: "105", height: "44" },
];

const Customers = () => {
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        loop: true,
    });

    const [activeIndex, setActiveIndex] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);

    useEffect(() => {
        if (instanceRef.current) {
            setTotalSlides(instanceRef.current.track.details.slides.length);
            instanceRef.current.on("slideChanged", (slider) => {
                setActiveIndex(slider.track.details.rel);
            });
        }
    }, [instanceRef]);

    const handleIconClick = (index) => {
        setActiveIndex(index);
        instanceRef.current?.moveToIdx(index);
    };

    return (
        <section className="customers py-24 w-full">
            <div className="container">
                <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20 md:mt-12">
                    <div className="mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-full px-4 py-2">
                        <span>Customers</span>
                    </div>
                    <h2 className="font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">
                        We have changed the game of AI Evaluations - hear it from Industry
                        Leaders.
                    </h2>
                    <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance]">
                        Scale’s SEAL Leaderboards are bringing trust to AI; learn from
                        experts why expert-driven private evaluations are so important.
                    </p>
                </div>

                {/* Testimonial Slider */}
                <div className="relative z-10">
                    <div className="select-none pointer-events-none absolute -top-[60%] -left-[10%] -right-[10%] bottom-[20%] opacity-50 bg-gradient_background__GEkO8"></div>
                    <div ref={sliderRef} className="keen-slider box_box__wrapper__7yWdR box_box-blue__FPEs4">
                        {testimonial.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center min-w-full px-6 py-10 md:py-20 keen-slider__slide"
                            >
                                <div className="lg:flex-1 max-w-[700px] text-center">
                                    <q className="inline-block mb-8 text-base md:leading-[1.6] md:text-xl text-pretty">
                                        {item.description}
                                    </q>
                                    <h4 className="inline-block mb-2 font-medium md:leading-7 md:text-lg sm:mb-0 text-no-gradient">
                                        {item.title}
                                    </h4>
                                    <p className="text-base text-white text-opacity-75">
                                        {item.designation}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination (Visible below md breakpoint) */}
                    <div className="md:hidden flex justify-center relative mx-auto mt-8 max-w-max gap-3">
                        {Array.from({ length: totalSlides }).map((_, idx) => (
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

                    {/* Customer Icons */}
                    <div className="w-full md:flex items-center hidden grow min-h-[40px] mt-12 justify-between">
                        <div className="cursor-pointer flex justify-between align-middle items-center relative transition-opacity duration-200 opacity-100 gap-5 w-full">
                            {customers.map((customer, index) => (
                                <img
                                    key={index}
                                    alt={`Customer ${index}`}
                                    src={customer.icon}
                                    loading="eager"
                                    width={customer.width}
                                    height={customer.height}
                                    decoding="async"
                                    data-nimg="1"
                                    sizes="(max-width: 320px) 256px, 320px"
                                    className={`object-contain max-h-12 max-w-[70%] cursor-pointer transition-all duration-300 ${activeIndex === index
                                        ? "opacity-100 brightness-200"
                                        : "opacity-50 grayscale"
                                        }`}
                                    style={{
                                        filter:
                                            activeIndex === index
                                                ? "contrast(0) brightness(100)"
                                                : "contrast(0) brightness(1) grayscale(1)",
                                    }}
                                    onClick={() => handleIconClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Customers;

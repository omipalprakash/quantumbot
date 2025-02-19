import React from 'react';
import Image from 'next/image';
const partners = [
    { src: "/assets/images/openai.webp", alt: "Logo 1" },
    { src: "/assets/images/adept.webp", alt: "Logo 2" },
    { src: "/assets/images/meta.webp", alt: "Logo 3" },
    { src: "/assets/images/cohere.webp", alt: "Logo 3" },
    { src: "/assets/images/anthropic.webp", alt: "Logo 3" },
]

const Partner = () => {
    return (
        <>
            <section className="overflow-hidden">
                <p className="max-w-max mb-10 md:mb-12 text-center mx-auto uppercase leading-[1.70] text-xs px-3 sm:px-0 md:text-sm tracking-[4px]">GENERATIVE AI PROVIDERS WE PARTNER WITH:</p>
                <div className="hidden md:block">
                    <ul className="items-center justify-center flex gap-4">
                        {partners.map((partner, index) => (
                            <li className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl" key={index}>
                                <div className="absolute bg-black/40 inset-px rounded-2xl" />
                                <div className="absolute inset-0 border border-white/15 rounded-2xl" />
                                <Image alt="openai" loading="lazy" width={108} height={28} decoding="async" data-nimg={1} className="logo-grid_full-white__9DeNP opacity-100 relative" style={{ color: 'transparent' }} srcSet={`${partner.src} 1x, ${partner.src} 2x`} src={partner.src} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative w-screen -translate-x-1/2 md:hidden left-1/2">
                    <div className="relative w-screen -translate-x-1/2 left-1/2">
                        <div className="w-full  py-4">
                            <ul className="flex animate-marquee">
                                {partners.concat(partners).map((partner, index) => (
                                    <li key={index} className="border border-white/15 mx-4 flex justify-center items-center flex-shrink-0  w-[230px] h-28 rounded-2xl text-center ">
                                        <Image style={{ color: 'transparent' }} srcSet={`${partner.src} 1x, ${partner.src} 2x`} src={partner.src} alt={partner.alt} width={108} height={28} className='logo-grid_full-white__9DeNP opacity-100 relative' />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Partner
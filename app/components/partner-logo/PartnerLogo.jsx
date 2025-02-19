import React from 'react';
import Image from 'next/image';

const clients = [
    { src: "/assets/images/fr.svg", alt: "Logo 1" },
    { src: "/assets/images/iso.svg", alt: "Logo 2" },
    { src: "/assets/images/aicpa.svg", alt: "Logo 3" },
]

const PartnerLogo = () => {
    return (
        <section className='brand py-10'>
            <div className='container'>
                <div class="max-w-[698px] mx-auto">
                    <div>
                        <p className="w-full mb-12 text-base text-center text-balance text-silver  px-4 mx-auto"><span className="mr-2">Scale is certified compliant with the following<br />
                            industry best practice standards and frameworks</span></p>
                        <div className='hidden md:block'>
                            <ul className="items-center justify-center md:gap-y-16 sm:min-h-[52px] gap-8 hidden sm:flex md:justify-around md:container" style={{ gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' }}>
                                {
                                    clients.map((client, index) => {
                                        return (
                                            <li className="md:col-span-2 flex items-center justify-center ml-12 lg:ml-0" key={index}>
                                                <div className="relative"><Image alt={client.alt} width={54} height={54} decoding="async" data-nimg={1} className="invert" style={{ color: 'transparent' }} srcSet={`${client.src} 1x, ${client.src} 2x`} src={client.src} /></div>
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                        <div className="md:hidden">
                            <ul className="items-center justify-center md:gap-y-16 sm:min-h-[52px] gap-8 flex md:justify-around md:container animate-marquee" style={{ gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' }}>
                                {clients.concat(clients).map((client, index) => (


                                    <li className="md:col-span-2 flex items-center justify-center ml-12 lg:ml-0 mx-4 flex-shrink-0" key={index}>
                                        <div className="relative"><Image alt={client.alt} width={54} height={54} decoding="async" data-nimg={1} className="invert" style={{ color: 'transparent' }} srcSet={`${client.src} 1x, ${client.src} 2x`} src={client.src} /></div>
                                    </li>

                                ))}

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PartnerLogo;


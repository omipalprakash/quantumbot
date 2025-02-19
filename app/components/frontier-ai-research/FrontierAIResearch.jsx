import React from 'react';

const FrontierAIResearch = () => {
    return (
        <section className="py-10">
            <div className="container gap-16">
                <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20 md:mt-12 ρi ρoDvz">
                    <h2 className="leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">Frontier AI Research</h2>
                    <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance]">SEAL (Safety, Evaluations, and Alignment Lab) is our research initiative to improve model capabilities through challenging private evaluations and novel research.</p>
                    <div className="mt-8 flex items-center gap-x-6">
                        <a style={{ WebkitTapHighlightColor: 'transparent' }} className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block" href="#">
                            <div className="new-button_button--primary font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--pink text-sm px-[30px] py-[14px]">Learn More<span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">→</span></div>
                            <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(200,139,196,0.4)]" />
                        </a>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default FrontierAIResearch;
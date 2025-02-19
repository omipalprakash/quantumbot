import React from 'react';
import AITextGenerator from './AITextGenerator';

const ReinforcementLearning = () => {
    return (
        <div className="box_box__wrapper__jXRQR">
            <div className="flex 3xl:py-[95px] z-10 relative xl:py-20 md:p-10 lg:py-12 p-6 flex-col-reverse rounded-2xl lg:rounded-[34px] overflow-hidden md:overflow-visible lg:flex-row-reverse xl:pr-20">
                <div className="xl:flex xl:w-auto w-full flex-col justify-center lg:items-start xl:min-w-[466px] xl:max-w-[466px] flex-1">
                    <p className="text-3xl xl:text-4xl  mb-2 text-white">RLHF</p>
                    <p className="text-zinc-400">Powering the next generation of Generative AI</p>
                    <p className="my-8 text-[#F5F5F5]">Scale Generative AI Data Engine powers the most advanced LLMs and generative models in the world through world-className RLHF, data generation, model evaluation, safety, and alignment.</p>
                    <div className="flex items-center gap-x-3 xs:gap-x-6">
                        <a style={{ WebkitTapHighlightColor: 'transparent' }} className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block" href="/#">
                            <div className="new-button_button--primary font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--pink text-sm px-[30px] py-[14px]">Label My Data<span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">→</span></div>
                            <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(200,139,196,0.4)]"></span>
                        </a>
                    </div>
                </div>
                <div className="-m-3 md:mt-0 md:mx-0 relative lg:flex lg:-translate-x-10 3xl:-translate-x-14 transition-transform duration-1000 ease-out rounded-[10px] shadow-xl xl:shadow-super overflow-hidden lg:mb-0 mb-9 lg:w-1/2 xl:w-[649px] xl:h-[402px] select-none aspect-[649/402] min-w-full lg:min-w-[50%] xl:min-w-[unset] max-w-[calc(100%+24px)]">
                    <div className="overflow-hidden rounded-[10px] w-full relative aspect-[649/402 box_box__chat__AoICB">
                        <div className="grid grid-cols-1 p-2 sm:p-3">
                            <div className="flex space-x-[3px] sm:space-x-1.5">
                                <div className="w-1.5 sm:w-3 h-1.5 sm:h-3 bg-red-400 rounded-full"></div>
                                <div className="w-1.5 sm:w-3 h-1.5 sm:h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-1.5 sm:w-3 h-1.5 sm:h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex text-[7px] sm:text-base font-medium pt-2 justify-center text-neutral-200">AI Text Generator</div>
                            <AITextGenerator />
                        </div>
                        <div className="relative h-full px-6 py-3 space-y-1 text-xs sm:space-y-2 text-neutral-200">
                            <div className="flex flex-col items-end space-y-2"></div>
                        </div>
                        <div className="absolute bottom-0 z-10 w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReinforcementLearning;
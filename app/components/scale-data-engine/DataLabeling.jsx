"use client"
import React, { useState } from 'react';

import Audio from '../audio/Audio';

const tabData = [
    {
        id: "3d",
        label: "3D",
        content: (
            <iframe src="https://lidar-now.scale.com/scene?title=Scene%20%231" className="w-full h-full bg-black border-0" />
        ),
    },
    {
        id: "image",
        label: "Image",
        content: (
            <img
                src="/assets/images/living-room.webp"
                alt="Data visualization"
                className="object-cover w-full h-full"
            />
        ),
    },
    {
        id: "mapping",
        label: "Mapping",
        content: (
            <img
                src="/assets/images/map.webp"
                alt="Mapping visualization"
                className="object-cover w-full h-full"
            />
        ),
    },
    {
        id: "text",
        label: "Text",
        content: (
            <img
                src="/text.svg"
                alt="Mapping visualization"
                className="object-cover w-full h-full"
            />
        ),
    },
    {
        id: "audio",
        label: "Audio",
        content: <Audio />, // Correctly rendering the Audio component
    },
];

const DataLabeling = () => {
    const [activeTab, setActiveTab] = useState('3d'); // Fix: Ensured default ID matches tabData

    return (
        <div className="box_box__wrapper__jXRQR">
            <div className="flex 3xl:py-[95px] z-10 relative xl:py-20 md:p-10 lg:py-12 p-6 flex-col-reverse rounded-2xl lg:rounded-[34px] overflow-hidden md:overflow-visible lg:flex-row xl:pl-20">
                <div className="xl:flex xl:w-auto w-full flex-col justify-center lg:items-start xl:min-w-[466px] xl:max-w-[466px] flex-1">
                    <p className=" text-3xl xl:text-4xl mb-2 text-white">Data Labeling</p>
                    <p className="text-zinc-400">
                        The best quality data to fuel the best performing models
                    </p>
                    <div className="mt-8 lg:mt-10">
                        <div>
                            <div className="flex flex-col-reverse items-start lg:flex-row">
                                <div className="relative no-scrollbar sm:mx-0 lg:w-[47%] overflow-visible xl:w-auto max-w-full p-6">
                                    <div className="px-8 mb-8 -mx-8 overflow-x-auto lg:overflow-x-visible lg:overflow-y-visible no-scrollbar tab__wrapper">
                                        <div
                                            className="tabs_tabs__qQMp5"
                                            role="tablist"
                                            aria-orientation="horizontal"
                                        >
                                            {tabData.map((tab) => (
                                                <button
                                                    key={tab.id}
                                                    className={`rounded-full py-2 px-4 relative transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black ${activeTab === tab.id ? "bg-white/10 text-white" : "text-white/50 hover:text-white/80"
                                                        }`}
                                                    id={`tab-${tab.id}`} // Fix: Correct ID assignment
                                                    role="tab"
                                                    type="button"
                                                    aria-selected={activeTab === tab.id}
                                                    onClick={() => setActiveTab(tab.id)}
                                                >
                                                    {tab.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="mb-8 text-[#F5F5F5]">
                                        Scale has pioneered in the data labeling industry by
                                        combining AI-based techniques with human-in-the-loop,
                                        delivering labeled data at unprecedented quality,
                                        scalability, and efficiency.
                                    </p>
                                    <div className="!gap-x-3 xs:!gap-x-6 flex items-center gap-x-6">
                                        <a
                                            style={{
                                                WebkitTapHighlightColor: 'transparent',
                                            }}
                                            className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                                            href="#"
                                        >
                                            <div className="new-button_button--primary font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--pink text-sm px-[30px] py-[14px]">
                                                Label My Data
                                                <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                                                    →
                                                </span>
                                            </div>
                                            <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(200,139,196,0.4)]"></span>
                                        </a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-auto">
                                    {tabData.map((tab) => (
                                        <div
                                            key={tab.id}
                                            role="tabpanel"
                                            id={`panel-${tab.id}`}
                                            aria-labelledby={`tab-${tab.id}`}
                                            hidden={activeTab !== tab.id}
                                            className={`bg-black relative w-full border border-[#D1AAD7]/[0.16] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-10 3xl:translate-x-14 transition-transform duration-1000 ease-out rounded-[10px] shadow-xl xl:shadow-super overflow-hidden lg:mb-0 mb-9 lg:w-1/2 xl:w-[649px] xl:h-[402px] select-none aspect-[649/402] min-w-full lg:min-w-[50%] xl:min-w-[unset] max-w-max ${activeTab === tab.id ? "opacity-100" : "opacity-0 pointer-events-none"
                                                }`}
                                        >
                                            <div className="audio_wrapper__x_Gue">
                                                {/* Content dynamically changes based on the active tab */}
                                                {tab.content}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataLabeling;

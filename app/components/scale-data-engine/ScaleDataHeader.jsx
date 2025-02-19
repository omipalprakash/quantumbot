import React from 'react';

const ScaleDataHeader = () => {
    return (
        <>
            <div className="select-none pointer-events-none absolute -top-[10%] -bottom-[10%] left-[5%] right-[5%] opacity-50 bg-gradient_background__GEkO8"></div>
            <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-10 md:mb-20 md:mt-12 relative z-10 !mb-16">
                <div className="mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-full px-4 py-2"><span>Build AI</span></div>
                <h2 className="font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">Scale Data Engine</h2>
                <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-gray-300 lg:text-xl [text-wrap:balance]">For AI teams, Scale Data Engine improves your models by improving your data.</p>
            </div>
        </>
    )
}

export default ScaleDataHeader
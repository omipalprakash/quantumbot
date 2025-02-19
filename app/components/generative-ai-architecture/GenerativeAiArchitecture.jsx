import React from 'react'
import ArchitectureHeader from './ArchitectureHeader'
import ArchitectureModels from './ArchitectureModels'
import Partner from './Partner'

const GenerativeAiArchitecture = () => {
    return (
        <>
            <section id="" class="py-18 lg:py-20 bg-transparent relative lg:pb-8">
                <div className="container relative">
                    <ArchitectureHeader />
                    <ArchitectureModels />
                    <Partner />
                </div>
            </section>
        </>
    )
}

export default GenerativeAiArchitecture
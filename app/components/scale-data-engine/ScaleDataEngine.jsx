import React from 'react';
import ScaleDataHeader from './ScaleDataHeader';
import ReinforcementLearning from './ReinforcementLearning';
import DataLabeling from './DataLabeling';
import DataCuration from './DataCuration';

const ScaleDataEngine = () => {
    return (
        <section id="build-ai" className="py-18 lg:py-20 bg-transparent relative">
            <div className="container relative">
                <div className='space-y-6 lg:space-y-16'>
                    <ScaleDataHeader />
                    <ReinforcementLearning />
                    <DataLabeling />
                    <DataCuration />
                </div>
            </div>
        </section>

    )
}

export default ScaleDataEngine;
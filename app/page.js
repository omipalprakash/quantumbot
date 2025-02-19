import React from 'react';
import Banner from './components/banner/Banner';
import FrontierAIResearch from './components/frontier-ai-research/FrontierAIResearch';
import ResearchSlider from './components/research-slider/ResearchSlider';
import GenerativeAiArchitecture from './components/generative-ai-architecture/GenerativeAiArchitecture';
import ScaleDataEngine from './components/scale-data-engine/ScaleDataEngine';
import Applications from './components/applications/Applications';
import CaseStudies from './components/case-studies/CaseStudies';
import Customers from './components/customers/Customers';
import PartnerLogo from './components/partner-logo/PartnerLogo';
import Future from './components/future/Future';

const Home = () => {
  return (
    <>
      <Banner />
      <FrontierAIResearch />
      <ResearchSlider />
      <GenerativeAiArchitecture />
      <ScaleDataEngine />
      <Applications />
      <CaseStudies />
      <Customers />
      <PartnerLogo />
      <Future />

    </>
  )
}

export default Home;
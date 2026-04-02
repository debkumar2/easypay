import React from 'react'
import Banner from './components/Banner'
import LocomotiveScroll from 'locomotive-scroll';
import TrustedBrands from './components/TrustedBrands';
import Workflow from './components/Workflow';
import KeyFeatures from './components/KeyFeatures';
import OurWorkflow from './components/OurWorkflow';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='p-6'>
      <Banner />
      <TrustedBrands/>
      <Workflow/>
      <KeyFeatures/>
      <OurWorkflow/>
      <Pricing/>
      <Testimonial/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App

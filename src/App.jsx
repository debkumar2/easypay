import React from 'react'
import Banner from './components/Banner'
import LocomotiveScroll from 'locomotive-scroll';
import TrustedBrands from './components/TrustedBrands';
import Workflow from './components/Workflow';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='p-6'>
      <Banner />
      <TrustedBrands/>
      <Workflow/>
    </div>
  )
}

export default App

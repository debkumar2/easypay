import React from 'react'
import Banner from './components/Banner'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='p-6'>
      <Banner/>
    </div>
  )
}

export default App

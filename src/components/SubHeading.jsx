import React from 'react'
import assets from '../assets/assets'

const SubHeading = ({ headingName }) => {
    return (
        <div className='flex items-center gap-1 mx-auto w-fit py-2 px-3 bg-[#f5f6f9] shadow-[0_0_1px_1px_#00000014,_inset_4px_4px_4px_#ffffff40] rounded-3xl'>
            <div className="">
                <img src={assets.smallBrandIcon} alt="" />
            </div>
            <p className='text-sm font-semibold text-[#8267ec]'>{headingName}</p>
        </div>
    )
}

export default SubHeading

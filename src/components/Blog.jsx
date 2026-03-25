import React from 'react'
import SubHeading from './SubHeading'
import Heading from './Heading'
import BlogCard from './BlogCard'

const Blog = () => {
    return (
        <div className='w-full mx-auto py-10'>
            <div className='max-w-[1128px] mx-auto'>
                <div>
                    <SubHeading headingName='Blog' isCentered={true} />
                    <div className='py-4 text-center'>
                        <div className='max-w-[500px] mx-auto'>
                            <Heading normalText='Maximizing the
value of business ' highlightText='data' />
                        </div>
                        <p className='text-base font-semibold text-zinc-500 max-w-3xl mx-auto py-6'>Our provide valuable insights, and establish your brand as a thought leader in the financial space.</p>
                    </div>
                </div>
                <div>
                    <BlogCard />
                </div>
            </div>
        </div>
    )
}

export default Blog

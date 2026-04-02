import React from 'react'
import { blogContentImg } from '../assets/assets'

const BlogCard = () => {

    const blogContent = [
        {
            imgUrl: blogContentImg.blogImgOne,
            finance: true,
            tips: false,
            heading: 'How real-time analytics can revolutionize your financial strategy',
            paragraph: 'Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your finances with ease.',
        },
        {
            imgUrl: blogContentImg.blogImgTwo,
            finance: true,
            tips: true,
            heading: 'Simplify and empower your financial management with Nicepay',
            paragraph: 'In today’s fast-paced business world, keeping up with financial management can be overwhelming.',
        },
        {
            imgUrl: blogContentImg.blogImgThree,
            finance: true,
            tips: true,
            heading: 'The importance of  streamlining business  payments',
            paragraph: 'In this blog, discuss how businesses can improve efficiency by using automated payment systems.',
        }
    ]
    return (
        <div className='grid grid-cols-3 gap-6'>
            {blogContent.map((item, index) => (
                <div key={index} className="border border-[#d8d8db] rounded-xl p-4 flex justify-between flex-col gap-3 transition-all duration-300 hover:border-[#8267ec] hover:scale-105 group">
                    <div className="max-w-[316px] border border-[#d8d8db] rounded-xl overflow-hidden shadow-md">
                        <img src={item.imgUrl} className='w-full' alt="" />
                    </div>
                    <div>
                        {item.finance && (
                            <span className='inline-block bg-[#f5f6f9] rounded-xl px-4 py-1 text-sm text-[#8267ec]'>Financial</span>
                        )}
                        {item.tips && (
                            <span className='inline-block bg-[#f5f6f9] rounded-xl px-4 py-1 text-sm text-[#8267ec]'>Tips</span>
                        )}
                    </div>
                    <h3 className='text-2xl tracking-tight text-[#060b13] font-normal'>{item.heading}</h3>
                    <p className='text-base font-medium text-[#909090]'>{item.paragraph}</p>
                    <button className='py-4 px-8 w-full rounded-4xl bg-white text-[#060b13] border border-[#d8d8db] font-medium group-hover:text-white group-hover:bg-[#8267ec] duration-300'>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default BlogCard

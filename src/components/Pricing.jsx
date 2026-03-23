import React, { useState } from 'react'
import Heading from './Heading'
import SubHeading from './SubHeading'
import { HiArrowRightCircle } from 'react-icons/hi2'

const Pricing = () => {
    const plans = {
        monthly: [
            {
                name: 'Basic plan',
                price: '$99.00',
                period: '/ month',
                paragraph: 'Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your finances with ease',
                active: false,
                features: [
                    'Unlimited Invoices',
                    'Next-Day Payments',
                    'Secure Payment Gateway',
                    'Basic Analytics and Reporting',
                    'Email Support'
                ]
            },
            {
                name: 'Pro plan',
                price: '$159.00',
                period: '/ month',
                paragraph: 'Designed for growing businesses, the Basic Plan expands on our Starter package with additional features and integrations.',
                active: true,
                features: [
                    'Unlimited Invoices',
                    'Next-Day Payments',
                    'Secure Payment Gateway',
                    'Basic Analytics and Reporting',
                    'Email Support'
                ]
            },
            {
                name: 'Enterprise plan',
                price: '$399.00',
                period: '/ month',
                paragraph: 'Tailored for large enterprises, this plan offers advanced features, personalized support, and the scalability.',
                active: false,
                features: [
                    'Unlimited Invoices',
                    'Next-Day Payments',
                    'Secure Payment Gateway',
                    'Basic Analytics and Reporting',
                    'Email Support'
                ]
            },

        ],
        annual: [
            {
                name: 'Basic plan',
                price: '$1000.00',
                period: '/ year',
                paragraph: 'Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your finances with ease',
                active: false,
                features: [
                    'Unlimited Invoices',
                    'Next-Day Payments',
                    'Secure Payment Gateway',
                    'Basic Analytics and Reporting',
                    'Email Support'
                ]
            },
            {
                name: 'Pro plan',
                price: '$1700.00',
                period: '/ year',
                paragraph: 'Designed for growing businesses, the Basic Plan expands on our Starter package with additional features and integrations.',
                active: true,
                features: [
                    'Unlimited Invoices',
                    'Next-Day Payments',
                    'Secure Payment Gateway',
                    'Basic Analytics and Reporting',
                    'Email Support'
                ]
            },
            {
                name: 'Enterprise plan',
                price: '$4000.00',
                period: '/ year',
                paragraph: 'Tailored for large enterprises, this plan offers advanced features, personalized support, and the scalability.',
                active: false,
                features: [
                    'Unlimited Invoices',
                    'Next-Day Payments',
                    'Secure Payment Gateway',
                    'Basic Analytics and Reporting',
                    'Email Support'
                ]
            },
        ]
    }
    const [subscription, setSubcription] = useState('monthly');
    const activePlans = plans[subscription];
    return (
        <div className='w-full mx-auto py-10'>
            <div className='max-w-[1128px] mx-auto'>
                <div>
                    <SubHeading headingName='Pricing' isCentered={true} />
                    <div className='max-w-[820px] mx-auto py-4 text-center'>
                        <Heading normalText='Simple and transparant ' highlightText='pricing' />
                        <p className='text-base font-semibold text-zinc-500 max-w-3xl mx-auto py-6'>Choose a plan that fits your business needs and budget. No hidden fees, no surprises—just straightforward pricing for powerful financial management.</p>
                    </div>
                    <div className=''>
                        <div className='p-2 rounded-[40px] border border-[#d8d8db] bg-[#f5f6f9] flex gap-2 w-fit mx-auto'>
                            <button onClick={() => setSubcription('monthly')} className={`w-fit ${subscription === 'monthly' ? 'border border-[#fff3]  bg-gradient-to-t from-[#7050f0] to-[#9680ef]  text-white' : 'bg-transparent border-none text-[#909090]'}  cursor-pointer rounded-3xl py-3 px-8 font-medium`}>Monthly</button>
                            <button onClick={() => setSubcription('annual')} className={`w-fit ${subscription === 'annual' ? 'border border-[#fff3]  bg-gradient-to-t from-[#7050f0] to-[#9680ef]  text-white' : 'bg-transparent border-none text-[#909090]'}  cursor-pointer rounded-3xl py-3 px-8 font-medium`}>Yearly</button>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-10">
                            {activePlans.map((plan,index)=>(
                                <div key={index} className='border border-[#d8d8db] rounded-xl py-8 px-6 flex flex-col gap-4'>
                                    <h4 className='text-2xl text-[#060b13] font-medium'>{plan.name}</h4>
                                    <div className='flex gap-2 items-center'>
                                        <h3 className='text-3xl text-[#060b13] font-medium'>{plan.price}</h3>
                                        <span className='text-sm text-[#909090] font-normal'>{plan.period}</span>
                                    </div>
                                    <p className='text-sm text-[#909090] font-medium'>{plan.paragraph}</p>
                                    <div className='w-full'>
                                        <button className={`w-full ${plan.active ? 'border border-[#fff3]  bg-gradient-to-t from-[#7050f0] to-[#9680ef]  text-white' : 'bg-white border border-[#d8d8db]'}  rounded-4xl text-base font-medium py-4 px-8 cursor-pointer`}>Get Started</button>
                                    </div>
                                    <ul>
                                        {plan.features.map((item,index)=>(
                                            <li className='flex items-center gap-2 text-sm text-[#060B13] font-semibold mb-4 last:mb-0' key={index}><HiArrowRightCircle color='#8267ec' fontSize='18' /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing

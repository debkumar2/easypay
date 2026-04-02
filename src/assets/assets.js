import brandLogo from '../assets/images/brandLogo.svg';
import bannnerCentered from '../assets/images/bannerCenter.png';
import bannerLeft from '../assets/images/bannerLeft.avif';
import bannerRight from '../assets/images/bannerRight.avif';
import arrowOne from '../assets/images/arrowOne.svg';
import arrowTwo from '../assets/images/arrowTwo.svg';
import bannerBgOne from '../assets/images/bannerBgOne.svg';
import bannerBgTwo from '../assets/images/bannerBgTwo.avif';
import bannerBgThree from '../assets/images/bannerBgThree.avif';
import bannerBgFour from '../assets/images/bannerBgFour.avif';
import bannerBgFive from '../assets/images/bannerBgFive.avif';
import smallBrandIcon from '../assets/images/smallBrandIcon.svg';
import slideBrandOne from '../assets/images/trustBrandOne.svg';
import slideBrandTwo from '../assets/images/trustBrandTwo.svg';
import slideBrandThree from '../assets/images/trustBrandThree.svg';
import slideBrandFour from '../assets/images/trustBrandFour.svg';
import slideBrandFive from '../assets/images/trustBrandFive.svg';
import slideBrandSix from '../assets/images/trustBrandSix.svg';
import slideBrandSeven from '../assets/images/trustBrandSeven.svg';
import slideBrandEight from '../assets/images/trustBrandEight.svg';
import { LuUserRoundPlus } from 'react-icons/lu';
import { RiBankLine } from 'react-icons/ri';
import { TbReportAnalytics, TbTopologyStar } from 'react-icons/tb';
import workFlowImgOne from '../assets/images/workflowImageOne.avif';
import workFlowImgTwo from '../assets/images/workflowImageTwo.avif';
import workFlowImgThree from '../assets/images/workflowImageThree.webp';
import workFlowImgFour from '../assets/images/workflowImageFour.avif';
import bigFeaturePhone from '../assets/images/featureBigPhone.avif';
import { FaDatabase } from 'react-icons/fa';
import { BiSolidMessageSquareEdit, BiSupport, BiTransfer } from 'react-icons/bi';
import workflowMain from '../assets/images/workflowMain.png';
import workflowAbsoluteOne from '../assets/images/workflowAbsoluteOne.avif';
import workflowAbsoluteTwo from '../assets/images/workflowAbsoluteTwo.avif';
import workflowAbsoluteThree from '../assets/images/workflowAbsoluteThree.avif';
import workflowAbsoluteFour from '../assets/images/workflowAbsoluteFour.avif';
import blogImgOne from './images/blogImg01.png';
import blogImgTwo from './images/blogImg02.webp'
import blogImgThree from './images/blogImg03.webp'

import reviewImgOne from './images/reviewImage01.jpg';
import reviewImgTwo from './images/reviewImage02.jpg';
import reviewImgThree from './images/reviewImage03.jpg';
import reviewImgFour from './images/reviewImage04.jpg';

const assets = {
    brandLogo,
    arrowOne,
    arrowTwo,
    smallBrandIcon,
    bigFeaturePhone,
    workflowMain,
    workflowAbsoluteOne,
    workflowAbsoluteTwo,
    workflowAbsoluteThree,
    workflowAbsoluteFour

}
export const bannerImages = {
    bannnerCentered,
    bannerLeft,
    bannerRight
}
export const bannnerBg = {
    bannerBgOne,
    bannerBgTwo,
    bannerBgThree,
    bannerBgFour,
    bannerBgFive
}
export const trustSlides = [
    slideBrandOne,
    slideBrandTwo,
    slideBrandThree,
    slideBrandFour,
    slideBrandFive,
    slideBrandSix,
    slideBrandSeven,
    slideBrandEight,
]
export const blogContentImg = {
    blogImgOne,
    blogImgTwo,
    blogImgThree
}
export const reviewContent = [
    {
        imgUrl: reviewImgOne,
        name: 'Oliver Bennett',
        review: "This platform has completely transformed how I manage my finances. The insights are clear, practical, and genuinely useful.",
        dated: 'July 18, 2025'
    },
    {
        imgUrl: reviewImgTwo,
        name: 'George Whitaker',
        review: "A very intuitive tool that makes tracking expenses and investments incredibly simple. I use it daily without any hassle.",
        dated: 'June 30, 2025'
    },
    {
        imgUrl: reviewImgTwo,
        name: 'Harry Collins',
        review: "Keeping track of multiple accounts used to be difficult, but this platform has streamlined everything brilliantly.",
        dated: 'May 21, 2025'
    },
    {
        imgUrl: reviewImgThree,
        name: 'Jack Thompson',
        review: "The dashboard provides a complete overview of my financial activities. It’s clean, fast, and very reliable.",
        dated: 'April 9, 2025'
    },
    {
        imgUrl: reviewImgFour,
        name: 'Charlie Edwards',
        review: "Budgeting has become far easier since I started using this tool. It’s helped me stay consistent with my savings goals.",
        dated: 'March 27, 2025'
    },
    {
        imgUrl: reviewImgTwo,
        name: 'Thomas Fletcher',
        review: "The automation features are excellent. I no longer worry about missing payments or manually tracking everything.",
        dated: 'February 11, 2025'
    },
    {
        imgUrl: reviewImgThree,
        name: 'William Harris',
        review: "A simple yet powerful solution for financial management. It helped me understand my spending habits clearly.",
        dated: 'January 25, 2025'
    },
    {
        imgUrl: reviewImgFour,
        name: 'James Walker',
        review: "Real-time updates make a big difference. I always know where I stand financially without any confusion.",
        dated: 'December 14, 2024'
    },
]
export const cardWorkFlow = [
    {
        icon: LuUserRoundPlus,
        title: 'Sign up and customize',
        paragraph: "Create your account in minutes and tailor the platform to meet your company's unique financial needs.",
        img: workFlowImgOne
    },
    {
        icon: RiBankLine,
        title: 'Link Your Accounts',
        paragraph: "Easily link your bank accounts, credit cards, loans, and investment accounts.",
        img: workFlowImgTwo
    },
    {
        icon: TbTopologyStar,
        title: 'Start Managing Efficiently',
        paragraph: "Seamlessly connect your existing financial tools and import your data for a smooth transition.",
        img: workFlowImgThree
    },
    {
        icon: FaDatabase,
        title: 'Integrate Your Data',
        paragraph: "Seamlessly connect your existing financial tools and import your data for a smooth transition.",
        img: workFlowImgFour
    }
]

export const keyFeatureList = [
    {
        icon: BiTransfer,
        heading: 'Flexible Data Transfer',
        subHeading: 'Easily import and export financial data to and from our platform'
    },
    {
        icon: TbReportAnalytics,
        heading: 'Personalized Reports',
        subHeading: 'Create and customize reports tailored to your specific needs.'
    },
    {
        icon: BiSupport,
        heading: 'Dedicated Support',
        subHeading: 'Our expert support team is available 24/7 to assist.'
    },
    {
        icon: BiSolidMessageSquareEdit,
        heading: 'Custom Reporting Tools',
        subHeading: 'Create and customize reports tailored to your specific needs.'
    }
]
export default assets;
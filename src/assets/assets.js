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

const assets = {
    brandLogo,
    arrowOne,
    arrowTwo,
    smallBrandIcon,
    bigFeaturePhone
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
        icon: BiSolidMessageSquareEdit ,
        heading: 'Custom Reporting Tools',
        subHeading: 'Create and customize reports tailored to your specific needs.'
    }
]
export default assets;
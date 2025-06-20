import heroImage from './assets/unibazar-features-images/FeaturesHeroImg.svg';
import Enterprises from './components/home/Enterprises/Enterprises';
import FAQ from './components/widgets/FAQ/FAQ';
import Hero from './components/widgets/HeroSection/HeroSection';
import FeatureIcon1 from "./assets/unibazar-features-images/feature-Icon1.svg";
import FeatureIcon2 from "./assets/unibazar-features-images/feature-Icon2.svg";
import FeatureIcon3 from "./assets/unibazar-features-images/feature-Icon3.svg";
import FeatureIcon4 from "./assets/unibazar-features-images/feature-Icon4.svg";
import FeatureIcon5 from "./assets/unibazar-features-images/feature-Icon5.svg";
import FeatureIcon6 from "./assets/unibazar-features-images/feature-Icon6.svg";
import Easy from './assets/unibazar-features-images/Easy.svg';
import Dashboard from './assets/unibazar-features-images/Dashboard.svg';
import Analytics from './assets/unibazar-features-images/Analytics.svg';
import Managements from './assets/unibazar-features-images/Management.svg';
import Products from './assets/unibazar-features-images/Products.svg';
import Interface from './assets/unibazar-features-images/Interface.svg';
import FeatureSection from './components/widgets/FeatureSection/FeatureSection';

import Facilities from './components/widgets/facilities/Facilities';
import Management from './components/about-us/Management/Management';

const FrequentlyAskedQuestion = [
    {
      question: 'What e-commerce platforms does Unibazar support?',
      answer: 'Unibazar currently supports Myntra, Meesho, and custom websites, with more platforms being added regularly.',
    },
    {
      question: 'Can I manage my inventory across all platforms using Unibazar?',
      answer: 'Yes, Unibazar allows you to sync and manage your inventory in real-time across all connected platforms.',
    },
    {
      question: 'How does Unibazar handle product listings?',
      answer: 'You can list products across multiple platforms simultaneously from a single interface, saving time and effort.',
    },
    {
      question: 'What analytics features does Unibazar offer?',
      answer: 'Unibazar provides real-time sales analytics, inventory tracking, and performance reports to help you make informed decisions.',
    },
    {
      question: 'How does Unibazar integrate with my existing systems?',
      answer: 'Unibazar offers seamless integration with various e-commerce platforms and tools, ensuring smooth operations.',
    },
  ];

  const features = [
  {
    icon: FeatureIcon1,
    title: "Easy Integration",
    description: "Connect All Your Platforms Effortlessly",
  },
  {
    icon: FeatureIcon2,
    title: "Unified Dashboard",
    description: "Centralized Management Hub",
    outline: true,
  },
  {
    icon: FeatureIcon3,
    title: "Real-time Analytics",
    description: "Actionable Insights at Your Fingertips",
  },
  {
    icon: FeatureIcon4,
    title: "Seamless Product Listing",
    description: "List Once, Sell Everywhere",
  },
  {
    icon: FeatureIcon5,
    title: "Inventory Management",
    description: "Keep Your Stock in Sync",
    outline: true,
  },
  {
    icon: FeatureIcon6,
    title: "User-friendly Interface",
    description: "Designed for Ease of Use",
  },
];

const facilities = [
  {
    image: Easy,
    subtitle: "Easy Integration",
    title: "Connect All Your Platforms Effortlessly",
    description:
      "Unibazar allows you to link multiple e-commerce platforms like \nMyntra, Meesho, and your own website with just a few clicks",
    reverse: true,
  },
  {
    image: Dashboard,
    subtitle: "Unified Dashboard ",
    title: "Centralized Management Hub",
    description:
      "Access a comprehensive dashboard that provides a holistic \nview of your sales, inventory, and orders across all connected \nplatforms",
    reverse: false,
  },
  {
    image: Analytics,
    subtitle: "Real-time Analytics ",
    title: "Actionable Insights at Your Fingertips ",
    description:
      "Leverage real-time data and analytics to track sales performance, \nmonitor inventory levels, and make informed business decisions",
    reverse: true,
  },
  {
    image: Managements,
    subtitle: "Inventory Management",
    title: "Keep Your Stock in Sync ",
    description:
      "Automatically synchronize inventory levels across \nall your sales channels",
    reverse: false,
  },
  {
    image: Products,
    subtitle: "Seamless Product Listing",
    title: "List Once, Sell Everywhere",
    description:
      "Understand sales trends, platform performance, and \ncustomer behavior to make strategic decisions",
    reverse: true,
  },
  {
    image: Interface,
    subtitle: "User-friendly Interface ",
    title: "Designed for Ease of Use",
    description:
      "Leverage real-time analytics to make informed \nbusiness decisions.",
    reverse: false,
  },
];

function Features() {
  return (
    <div className="mx-2 md:mx-10 lg:mx-20 p-4 rounded-sm">
        <Hero
          img={heroImage}
          title="Unlock the Power of Seamless E-commerce Management"
          detail="Discover how Unibazar can transform your multi-platform selling experience."
          buttonText="Get Started for free"
        />
        <Enterprises/>
        <FeatureSection features={features}/> 
        <Management/>
        <Facilities facilities={facilities}/>
        <FAQ FrequentlyAskedQuestion={FrequentlyAskedQuestion}/>
      </div>
  )
}

export default Features
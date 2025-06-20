import Hero from './components/widgets/HeroSection/HeroSection'
import heroImage from './assets/unibazar-home-images/heroImage.svg';
import FeatureSection from './components/widgets/FeatureSection/FeatureSection';
import FAQ from './components/widgets/FAQ/FAQ'
import Enterprises from './components/home/Enterprises/Enterprises';
import Facilities from './components/home/facilities/Facilities';
import OnlineBooking from './components/home/OnlineBooking/OnlineBooking';
import Working from './components/home/Working/Working';
import Signup from './components/widgets/Signup/Signup';
import PlanSection from './components/home/PricePlan/PlanSection';

const FrequentlyAskedQuestion = [
    {
      question: 'How do I link my e-commerce platforms to Unibazar?',
      answer: 'After registering, simply go to the onboarding page and link your platforms with provided API keys.',
    },
    {
      question: 'Is there a free plan available?',
      answer: 'Yes, Unibazar offers a free plan with basic features.',
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Yes, you can upgrade to a higher plan at any time from the pricing page.',
    },
    {
      question: 'How secure is my data on Unibazar?',
      answer: 'Unibazar uses advanced encryption to ensure your data is safe and secure.',
    },
    {
      question: 'How does Unibazar help manage multiple e-commerce platforms?',
      answer: 'Unibazar allows you to list and manage products across multiple platforms from a single dashboard, saving you time and effort.',
    },
    {
      question: 'Can I list the same product on multiple platforms simultaneously?',
      answer: 'Yes, you can easily list products on all linked platforms at once with just a few clicks.',
    },
    {
      question: 'What if I’m new to selling online?',
      answer: 'Unibazar simplifies the process with easy setup and management tools, perfect for first-time online sellers.',
    },
    {
      question: 'How do I manage inventory across different platforms?',
      answer: 'Unibazar provides a unified inventory management system, ensuring your stock levels are synchronized across all platforms.',
    },
    {
      question: 'Can I track the performance of my products on different platforms?',
      answer: 'Yes, Unibazar offers real-time analytics to help you monitor product performance across all linked platforms.',
    },
    {
      question: 'What should I do if I have trouble linking my e-commerce platforms?',
      answer: 'Contact our support team, and they will guide you through the process step by step.',
    },
    {
      question: 'What if I accidentally list a product incorrectly?',
      answer: 'Unibazar allows you to quickly edit or remove listings across all platforms simultaneously.',
    },
  ];

function Home() {

  return (
    <>
      <div className="mx-2 md:mx-10 lg:mx-20 p-4 rounded-sm">
        <Hero
          img={heroImage}
          title="Simplify Your E-commerce Management with Unibazar"
          detail="Discover how Unibazar can transform your multi-platform selling experience."
          buttonText="Get Started for free"
        />
        <FeatureSection />
        <Enterprises/>
        <OnlineBooking/>
        <Facilities/>
        <Working/>
        <PlanSection/>
        <FAQ FrequentlyAskedQuestion={FrequentlyAskedQuestion}/>
        <Signup/>
      </div>
    </>
  )
}

export default Home

import Hero from './components/widgets/HeroSection/HeroSection'
import heroImage from './assets/unibazar-pricing-images/pricing.svg';
import Signup from './components/widgets/Signup/Signup';
import FAQ from './components/widgets/FAQ/FAQ'
import ChoosePlan from './components/pricing/ChoosePlan';
import ComparePlan from './components/pricing/ComparePlan';
import Testimonials from './components/pricing/Testimonials';

const FrequentlyAskedQuestion = [
    {
      question: 'What pricing plans does Unibazar offer?',
      answer: 'Unibazar offers Free, Pro, and Enterprise plans to suit different business needs.',
    },
    {
      question: 'What features are included in the Free Plan?',
      answer: 'The Free Plan includes basic features like linking up to 2 platforms and managing up to 50 products.',
    },
    {
      question: 'How does the Pro Plan differ from the Free Plan?',
      answer: 'The Pro Plan includes advanced features like real-time analytics, inventory management, and support for up to 5 platforms.',
    },
    {
      question: 'What’s included in the Enterprise Plan?',
      answer: 'The Enterprise Plan offers unlimited platform integrations, customized features, and dedicated support.',
    },
    {
      question: 'Can I switch between plans?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time based on your business requirements.',
    },
    {
      question: 'Is there a trial period available?',
      answer: 'Yes, Unibazar offers a trial period for you to explore the features before committing to a paid plan.',
    },
    {
      question: 'Are there any hidden fees in the pricing plans?',
      answer: 'No, Unibazar’s pricing is transparent, with no hidden fees or charges.',
    },
  ];

function Pricing() {

  return (
    <>
      <div className="mx-2 md:mx-10 lg:mx-20 p-4 rounded-sm">
        <Hero
          img={heroImage}
          title={`Choose the Right Plan ${<br />}for Your Business`}
          detail={`Flexible pricing plans to suit your needs. Start with our${<br />} Free plan or unlock more features with our Pro and${<br />} Enterprise plans.`}
          buttonText="Get Start for free"
        />
        <ChoosePlan />
        <br />
        <ComparePlan />
        <br />
        <Testimonials />
        <br />
        <FAQ FrequentlyAskedQuestion={FrequentlyAskedQuestion}/>
        <br />
        <Signup />    
      </div>
    </>
  )
}

export default Pricing

import Hero from './components/widgets/HeroSection/HeroSection'
import heroImage from './assets/unibazar-aboutus-images/aboutus.svg';
import JoinUs from "./assets/joinus.svg";
import FAQ from './components/widgets/FAQ/FAQ';
import Enterprises from './components/home/Enterprises/Enterprises';
import Facilities from './components/home/facilities/Facilities';
import OnlineBooking from './components/home/OnlineBooking/OnlineBooking';
import Working from './components/home/Working/Working';
import Signup from './components/widgets/Signup/Signup';
import PlanSection from './components/home/PricePlan/PlanSection';
import Story from './components/about-us/Story/Story';
import Ethics from './components/about-us/Ethics/Ethics';
import WhyUnibazar from './components/about-us/WhyUnibazar/WhyUnibazar';
import MeetFounder from './components/about-us/MeetFounder/MeetFounder';
import ContactUs from './components/about-us/ContactUs/ContactUs';


const FrequentlyAskedQuestion = [
    {
      question: 'What is Unibazar’s mission?',
      answer: 'Our mission is to simplify e-commerce management for sellers, enabling them to scale their businesses effortlessly.',
    },
    {
      question: 'Who are the key people behind Unibazar?',
      answer: 'Unibazar was co-founded by Amritesh, Rahul, Aman, Parul, Utkarsh and Dilip who lead the company with a focus on innovation and growth.',
    },
    {
      question: 'What industries does Unibazar serve?',
      answer: 'Unibazar serves e-commerce sellers across various industries, from fashion to electronics.',
    },
    {
      question: 'How does Unibazar contribute to the e-commerce ecosystem?',
      answer: 'We provide tools that empower sellers to manage their businesses more efficiently, driving growth in the e-commerce sector.',
    },
    {
      question: 'What are the core values of Unibazar?',
      answer: 'Innovation, simplicity, and customer success are at the heart of everything we do.',
    },
  ];

function AboutUs() {

  return (
    <>
      <div className="mx-2 md:mx-10 lg:mx-20 p-4 rounded-sm">
        <Hero
          img={heroImage}
          title="ABOUT US"
          detail="Discover how Unibazar can transform your multi-platform selling experience."
          buttonText="Get Started for free"
        />
        <Enterprises/>
        <Story/>
        <Ethics/>
        <WhyUnibazar/>
        <MeetFounder/>
        <Hero
          img={JoinUs}
          title="JOIN US"
          detail="Join the growing community of successful sellers who have chosen Unibazar to enhance their e-commerce operations. Together, we can transform the way you manage your online business."
          buttonText="Signup for free"
        />
        <FAQ FrequentlyAskedQuestion={FrequentlyAskedQuestion}/>
        <ContactUs/>
      </div>
    </>
  )
}

export default AboutUs

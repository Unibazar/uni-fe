import Hero from './components/widgets/HeroSection/HeroSection'
import heroImage from './assets/unibazar-contactus-images/contactSupport.svg';
import Signup from './components/widgets/Signup/Signup';
import FAQ from './components/widgets/FAQ/FAQ'
import ContactDetails from './components/contact-us/ContactDetails';

const FrequentlyAskedQuestion = [
     {
      question: 'How can I contact Unibazar for support?',
      answer: 'You can reach us vie email at support@unibazar.in or call us at +08069641420.',
    },
    {
      question: 'What is the best way to get in touch with Unibazar?',
      answer: 'For quick assistance, use the live chat feature on our website, or email us directly.',
    },
    {
      question: 'Can I request a demo of Unibazar?',
      answer: 'Yes, you can request a demo by filling out the form on our Contact Us page.',
    },
    {
      question: 'What should I do if I encounter an issue?',
      answer: 'You can report any issues through our support email or the live chat on our website.',
    },
    {
      question: 'How quickly can I expect a response from support?',
      answer: 'We aim to respond to all inquiries within 24 hours.',
    },
  ];

function ContactUs() {

  return (
    <>
      <div className="mx-2 md:mx-10 lg:mx-20 p-4 rounded-sm">
        <Hero
          img={heroImage}
          title="GET IN TOUCH WITH US"
          detail={<div>We&apos;re Here To Help You With Any Questions Or <br />
          Support You Need</div>}
          buttonText="Contact Support"
        />
        <ContactDetails />
        <br />
        <FAQ FrequentlyAskedQuestion={FrequentlyAskedQuestion}/>
        <br />
        <Signup />    
      </div>
    </>
  )
}

export default ContactUs

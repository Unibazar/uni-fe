import Hero from './components/widgets/HeroSection/HeroSection'
import heroImage from './assets/unibazar-home-images/heroImage.svg';
import FeatureSection from './components/widgets/FeatureSection/FeatureSection';
import FAQ from './components/widgets/FAQ/FAQ'
import Enterprises from './components/home/Enterprises/Enterprises';
import Plans from './components/home/PricePlan/Plan';
import Facilities from './components/home/facilities/Facilities';
import OnlineBooking from './components/home/OnlineBooking/OnlineBooking';
import Working from './components/home/Working/Working';
import Signup from './components/widgets/Signup/Signup';

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
        <Plans/>
        <FAQ />
        <Signup/>
      </div>
    </>
  )
}

export default Home

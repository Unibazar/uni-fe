import AppNavBar from './components/widgets/AppNavbar/AppNavbar'
import Hero from './components/widgets/HeroSection/HeroSection'
import heroImage from './assets/unibazar-home-images/heroImage.svg';
import FeatureSection from './components/widgets/FeatureSection/FeatureSection';
import FAQ from './components/widgets/FAQ/FAQ';
import Footer from './components/widgets/AppFooter/Footer';
import Enterprises from './components/Enterprises/Enterprises';
import Plans from './components/PricePlan/Plan';

function App() {

  return (
    <>
      <AppNavBar />
      <div className="mx-2 md:mx-10 lg:mx-20 p-4 rounded-sm">
        <Hero
          img={heroImage}
          title="Simplify Your E-commerce Management with Unibazar"
          detail="Discover how Unibazar can transform your multi-platform selling experience."
          buttonText="Get Started for free"
        />
        <FeatureSection />
        <Enterprises/>
        <Plans/>
        <FAQ />
      </div>

      <Footer />
    </>
  )
}

export default App

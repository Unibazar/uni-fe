import AppNavBar from './components/widgets/AppNavbar/AppNavbar'
import Hero from './components/widgets/HeroSection/HeroSection'
import heroImage from './assets/unibazar-home-images/heroImage.svg';
import FeatureSection from './components/widgets/FeatureSection/FeatureSection';
import FAQ from './components/widgets/FAQ/FAQ';
import Footer from './components/widgets/AppFooter/Footer';
import Enterprises from './components/home/Enterprises/Enterprises';
import Plans from './components/home/PricePlan/Plan';
import Home from './Home';

function App() {

  return (
    <>
      <AppNavBar />
      <Home/>

      <Footer />
    </>
  )
}

export default App

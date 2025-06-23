import AppNavBar from './components/widgets/AppNavbar/AppNavbar'
import Footer from './components/widgets/AppFooter/Footer';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUS';
import Features from './Features';
import Pricing from './Pricing';
import ContactUs from './ContactUs';

function App() {

  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/contact-us" element={<ContactUs/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

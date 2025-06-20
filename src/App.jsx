import AppNavBar from './components/widgets/AppNavbar/AppNavbar'
import Footer from './components/widgets/AppFooter/Footer';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUS';
import Features from './Features';

function App() {

  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/features" element={<Features/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

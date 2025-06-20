import AppNavBar from './components/widgets/AppNavbar/AppNavbar'
import Footer from './components/widgets/AppFooter/Footer';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUS';

function App() {

  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App

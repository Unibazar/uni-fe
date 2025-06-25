import AppNavBar from './components/widgets/AppNavbar/AppNavbar'
import Footer from './components/widgets/AppFooter/Footer';
import Home from './Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutUs from './AboutUS';
import Features from './Features';
import Pricing from './Pricing';
import ContactUs from './ContactUs';
import Dashboard from './Dashboard/Pages';
import DashboardLayout from './Dashboard/Pages/layout';

function App() {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboardRoute && <AppNavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          
        </Route>
      </Routes>
      {!isDashboardRoute && <Footer />}
    </>
  )
}

export default App

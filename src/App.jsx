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
import AccountSettings from './Dashboard/DashboardPages/AccountSettingsPages/AccountSettings';
import ContactSupport from './Dashboard/DashboardPages/HelpAndSupportPages/ContactSupport';
import Analytics from './Dashboard/DashboardPages/HelpAndSupportPages/Analytics/Analytics';
import OrderListPage from './Dashboard/DashboardPages/OrderPages/OrderListPage';
import Overview from './Dashboard/DashboardPages/Overview/Overview';

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
          <Route path='overview' element={<Overview />} />
          <Route path='linkaccount' element={<Overview />} />
          <Route path="orderlist" element={<OrderListPage/>} />
          <Route path="analytics" element={<Analytics/>} />
          <Route path="accountsettings" element={<AccountSettings/>} />
          <Route path="helpandsupport" element={<ContactSupport/>} />
        </Route>
      </Routes>
      {!isDashboardRoute && <Footer />}
    </>
  )
}

export default App

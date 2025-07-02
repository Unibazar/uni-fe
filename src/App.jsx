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
import Register from './Register';
import Resetpass from './Resetpassword';
import Forgotpass from './Forgotpassword';

function App() {
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/dashboard');
  const isAuthRoute = location.pathname.startsWith('/auth')

  return (
    <>
      {!isDashboardRoute && !isAuthRoute && <AppNavBar />}
      <Routes>
        <Route path="/auth" element={<AuthLayout/>}>
          <Route index element={<Login/>} />
          <Route path='register' element={<Register />} />
          <Route path='resetPassword' element={<Resetpass />} />
          <Route path='forgotPassword' element={<Forgotpass />} />
          <Route path='otp' element={<Otp />} />
        </Route>
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
      {!isDashboardRoute && !isAuthRoute && <Footer />}
    </>
  )
}

export default App

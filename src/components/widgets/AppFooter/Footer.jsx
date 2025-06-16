import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import logo from '../../../assets/unibazar_logo.svg';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-5">
        <div className="p-5 max-w-md">
          <ul>
            <li className=' md:w-16 w-16'>
              <Link to='/'><img src={logo} alt="logo"></img></Link>
            </li>
            <li className="text-gray-600 font-semibold text-1xl pb-4 pt-4">Unibazar is a tech platform that enables seamless product listing, inventory management, and order tracking across multiple platforms, all from a single, intuitive dashboard. With Unibazar, sellers can streamline their workflows, save time, and focus on growing their businesses effortlessly.</li>
            <li className="flex gap-6 pb-4">
              {/* Section for icons */}
              <FaInstagram className="text-1xl cursor-pointer hover:text-teal-600" />
              <FaXTwitter className="text-1xl cursor-pointer hover:text-teal-600" />
              <FaLinkedin className="text-1xl cursor-pointer hover:text-teal-600" />
              <FaYoutube className="text-1xl cursor-pointer hover:text-teal-600" />
            </li>
          </ul>
        </div>
        <div className={`flex md:flex-row justify-between `}>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-1xl pb-4">COMPANY</p>
              <li className="text-gray-600 text-md pb-2 font-semibold hover:text-teal-500 cursor-pointer"><Link to='/about-us'>About us</Link></li>
              <li className="text-gray-600 text-md pb-2 font-semibold hover:text-teal-500 cursor-pointer"><Link to='/blog'>Blog</Link></li>
              <li className="text-gray-600 text-md pb-2 font-semibold hover:text-teal-500 cursor-pointer"><Link to='/contact-us'>Contact us</Link></li>
              <li className="text-gray-600 text-md pb-2 font-semibold hover:text-teal-500 cursor-pointer"><Link to='/pricing'>Pricing</Link></li>
              <li className="text-gray-600 text-md pb-2 font-semibold hover:text-teal-500 cursor-pointer"><Link to='/testimonials'>Testimonials</Link></li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-1xl pb-4">SUPPORT</p>
              <li className="text-gray-600 text-md pb-2 font-semibold hover:text-teal-500 cursor-pointer"><Link to='/help-center'>Help center</Link></li>
              <li className="text-gray-600 text-md pb-2 font-semibold hover:text-teal-500 cursor-pointer"><Link to='/term-and-conditions'>Terms of service</Link></li>
              <li className="text-gray-600 text-md pb-2 font-semibold hover:text-teal-500 cursor-pointer"><Link to='/legal-information'>Legal</Link></li>
              <li className="text-gray-600 text-md pb-2 font-semibold hover:text-teal-500 cursor-pointer"><Link to='/privacy-and-policy'>Privacy policy</Link></li>
            </ul>
          </div>
        </div>
        <div className={`p-5`}>
          <ul>
            <p className="text-gray-800 font-bold text-1xl pb-4 ">CONTACT INFO</p>
            <li className="text-gray-600 text-md pb-2 font-semibold ">Phone: <span className='hover:text-teal-500 cursor-pointer'><Link to="tel:+08069641420">+08069641420</Link></span></li>
            <li className="text-gray-600 text-md pb-2 font-semibold ">
              Email: <span className='hover:text-teal-500 cursor-pointer'><Link to="mailto:support@unibazar.in">support@unibazar.in</Link></span>
            </li>
            <li className="text-gray-600 text-md pb-2 font-semibold ">Location: <span className='hover:text-teal-500 cursor-pointer'><Link to="https://www.google.com/maps/search/lucknow" target='_blank' rel='noopener noreferrer'>AIC-MUJ, Vinayak Marg, Jaipur, Rajsthan 303007</Link></span></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
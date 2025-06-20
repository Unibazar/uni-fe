import FlipkartLogo from '../../../assets/unibazar-home-images/flipkart-logo.svg';
import AmazoneLogo from '../../../assets/unibazar-home-images/amazon-logo.svg';
import ShopifyLogo from '../../../assets/unibazar-home-images/shopify-logo.svg';
import MyntraLogo from '../../../assets/unibazar-home-images/myntra-logo.svg';
import SnapdealLogo from '../../../assets/unibazar-home-images/snapdeal-logo.svg';
import NykaaLogo from '../../../assets/unibazar-home-images/nykaa-logo.svg';
import LimeRoadLogo from '../../../assets/unibazar-home-images/limeRoad-logo.svg';
import AjioLogo from '../../../assets/unibazar-home-images/ajio-logo.svg';

const Enterprises = () => {
  return (
    <>
      <div className='py-20'>
        <div>
          <h2 className='text-center text-3xl font-semibold'>Trusted by Leading Indian Enterprises</h2>
          <p className='text-center mb-7 text-sm mt-4 opacity-60'>We are delighted to share that our resort is now prominently featured in the updated media gallery</p>
        </div>

        <div className='flex justify-center items-center gap-10'>
          <div className="">
            <img src={FlipkartLogo} alt="enterprise-logo.."></img>
          </div>
          <div className=''>
            <img src={AmazoneLogo} alt="enterprise-logo.."></img>
          </div>
          <div className=''>
            <img src={NykaaLogo} alt="enterprise-logo.."></img>
          </div>
          <div className=''>
            <img src={MyntraLogo} alt="enterprise-logo.."></img>
          </div>
          <div className=''>
            <img src={ShopifyLogo} alt="enterprise-logo.."></img>
          </div>
          <div className=''>
            <img src={AjioLogo} alt="enterprise-logo.."></img>
          </div>
          <div className=''>
            <img src={SnapdealLogo} alt="enterprise-logo.."></img>
          </div>
          <div className=''>
            <img src={LimeRoadLogo} alt="enterprise-logo.."></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enterprises;

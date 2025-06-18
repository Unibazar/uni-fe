import FacilityImg1 from '../../../assets/unibazar-home-images/facility-img1.svg';
import FacilityImg2 from '../../../assets/unibazar-home-images/facility-img2.svg';
import FacilityImg3 from '../../../assets/unibazar-home-images/facility-img3.svg';
import FacilityImg4 from '../../../assets/unibazar-home-images/facility-img4.svg';

const Facilities = () => {
  return (
    <div className="py-5">
      {/* 1 */}
      <div className="flex flex-wrap justify-evenly md:py-1 py-5">
        <div className="min-w-[32%] max-w-[345px]">
          <img src={FacilityImg1} alt="wait.." />
        </div>
        <div className="flex flex-col justify-center min-w-[40%]">
          <p className="text-[#08a9a0]">List Once, Sell Everywhere</p>
          <h2 className="text-[30px] font-semibold m-0">Seamless Product Listing</h2>
          <p className="text-[#455a64] text-[16px]">
            Create and manage product listings from a unified interface. Save <br />
            time and effort by listing your products across multiple platforms <br />
            simultaneously
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="flex flex-wrap-reverse justify-evenly md:py-1 py-10">
        <div className="flex flex-col justify-center min-w-[40%]">
          <p className="text-[#08a9a0]">Keep Your Stock in Sync</p>
          <h2 className="text-[30px] font-semibold m-0">Inventory Management</h2>
          <p className="text-[#455a64] text-[16px]">
            Automatically synchronize inventory levels across all your sales <br />
            channels. Receive notifications for low stock and out-of-stock items <br />
            to ensure you never miss a sale
          </p>
        </div>
        <div className="min-w-[32%] max-w-[345px]">
          <img src={FacilityImg2} alt="wait.." />
        </div>
      </div>

      {/* 3 */}
      <div className="flex flex-wrap justify-evenly md:py-1 py-10">
        <div className="min-w-[32%] max-w-[345px]">
          <img src={FacilityImg3} alt="wait.." />
        </div>
        <div className="flex flex-col justify-center min-w-[40%]">
          <p className="text-[#08a9a0]">Designed for Ease of Use</p>
          <h2 className="text-[30px] font-semibold m-0">User-friendly Interface</h2>
          <p className="text-[#455a64] text-[16px]">
            Unibazar features an intuitive interface designed for users of all skill <br />
            levels. Navigate through the platform with ease and efficiency
          </p>
        </div>
      </div>

      {/* 4 */}
      <div className="flex flex-wrap-reverse justify-evenly md:py-1 py-5">
        <div className="flex flex-col justify-center min-w-[40%]">
          <p className="text-[#08a9a0]">Operations</p>
          <h2 className="text-[30px] font-semibold m-0">Optimize your day-to-day operations</h2>
          <p className="text-[#455a64] text-[16px]">
            Make your business more efficient by optimizing your <br />
            workflow and automating daily tasks, customer emails, <br />
            invoices and vouchers
          </p>
        </div>
        <div className="min-w-[32%] max-w-[345px]">
          <img src={FacilityImg4} alt="wait.." />
        </div>
      </div>
    </div>
  );
};

export default Facilities;

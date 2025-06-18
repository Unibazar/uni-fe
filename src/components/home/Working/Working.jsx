import WorkIcon1 from '../../../assets/unibazar-home-images/work-icon1.png';
import WorkIcon2 from '../../../assets/unibazar-home-images/work-icon2.png';
import WorkIcon3 from '../../../assets/unibazar-home-images/work-icon3.png';
import WorkIcon4 from '../../../assets/unibazar-home-images/work-icon4.png';

const Working = () => {
  return (
    <div className="flex flex-col px-4">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-[24px] font-bold m-0">How It Works ?</h1>
        <p className="text-[#455a64] text-[16px]">Easy listing and booking process</p>
      </div>

      {/* Work cards */}
      <div className="flex flex-wrap md:flex-row flex-col justify-center items-center gap-5 mt-5 px-4">
        {/* Work step 1 */}
        <div className="max-w-[240px] w-full p-8 bg-[#F5FDFD] rounded-md flex flex-col items-center gap-4 flex-1 min-w-[320px] md:min-w-[unset]">
          <img className="w-[30px] bg-[#F5FDFD]" src={WorkIcon1} alt="wait.." />
          <p className="text-center text-[14px]">Register</p>
        </div>

        {/* Work step 2 */}
        <div className="max-w-[240px] w-full p-8 bg-[#F5FDFD] rounded-md flex flex-col items-center gap-4 flex-1 min-w-[320px] md:min-w-[unset]">
          <img className="w-[30px] bg-[#F5FDFD]" src={WorkIcon2} alt="wait.." />
          <p className="text-center text-[14px]">Link Your platforms</p>
        </div>

        {/* Work step 3 */}
        <div className="max-w-[240px] w-full p-8 bg-[#F5FDFD] rounded-md flex flex-col items-center gap-4 flex-1 min-w-[320px] md:min-w-[unset]">
          <img className="w-[30px] bg-[#F5FDFD]" src={WorkIcon3} alt="wait.." />
          <p className="text-center text-[14px]">Prepare your space</p>
        </div>

        {/* Work step 4 */}
        <div className="max-w-[240px] w-full p-8 bg-[#F5FDFD] rounded-md flex flex-col items-center gap-4 flex-1 min-w-[320px] md:min-w-[unset]">
          <img className="w-[30px] bg-[#F5FDFD]" src={WorkIcon4} alt="wait.." />
          <p className="text-center text-[14px]">Manage listing</p>
        </div>
      </div>
    </div>
  );
};

export default Working;

// import{useEffect} from 'react';
// import { loadUser } from '@/redux/slice/userSlice';
// import { useDispatch, useSelector } from 'react-redux';
const OnlineBooking = () => {
//   const dispatch = useDispatch();
//   const user = useSelector(state => state.user.user);
 
 
//   useEffect(() => {
//     dispatch(loadUser());
//   }, [dispatch]);

  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="max-w-3xl">
        <h2 className="text-[28px] font-bold mb-2">
          Manage all your e-commerce platforms from one place.
        </h2>
        <p className="text-[14px] text-[#555] mt-0 mb-4">
          Effortlessly handle their product listings, inventory, and sales across various e-commerce platforms <br />
          from a single interface
        </p>
      </div>

      {/* Buttons */}
      <div className="flex md:flex-row flex-col gap-4 mt-12 mb-12">
        <a
          href="/register"
          className="px-16 py-4 text-white bg-teal-700 rounded-xl hover:bg-teal-800"
        >
          Signup for free
        </a>
        <a
          href="/contact-us"
          className="px-16 py-4 text-teal-700 border border-[#077360] rounded-xl hover:border-[#00382e] hover:text-teal-900"
        >
          Contact Now
        </a>
      </div>
    </div>
  );
};

export default OnlineBooking;

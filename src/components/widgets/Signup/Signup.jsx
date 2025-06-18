// import React, { useEffect } from 'react';
import SignupImage from '../../../../assets/unibazar-contactus-images/signup-img.svg';

// import { loadUser } from '@/redux/slice/userSlice';
// import { useDispatch, useSelector } from 'react-redux';
const Signup = () => {

//   const dispatch = useDispatch();
//   const user = useSelector(state => state.user.user);
 
 
//   useEffect(() => {
//     dispatch(loadUser());
//   }, [dispatch]);

  return (
    <>
      <div className="bg-teal-50 w-full flex md:flex-row flex-col justify-center md:pl-32 ">
        <div className='w-auto justify-center  md:w-96  items-center flex'>
          <img src={SignupImage} alt="wait.."></img>
        </div>
        <div className=" md:w-1/2 w-full py-5  justify-center md:justify-normal md:items-start items-center flex flex-col">
          <p className="p-5 text-3xl  justify-center md:justify-normal md:items-start items-center flex">
            All-in-one Platform <br /> to manage and grow your Business
          </p>
          <p className="p-5  justify-center md:justify-normal md:items-start items-center flex">
            Organize your business with 24/7 automated yor products, <br /> reminders, payments, and more.
          </p>
          {/* {!user?.user.verified && */}
          <div className="p-5">
            <a href="/register" className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-800 ">
              Signup for Free
            </a>
          </div>
          {/* } */}
        </div>
      </div>
    </>
  );
};

export default Signup;
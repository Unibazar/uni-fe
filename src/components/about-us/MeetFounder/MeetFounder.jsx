import image from '../../../assets/meet.svg';

function MeetFounder() {
  return (
     <div className='w-full flex md:flex-row flex-col justify-between  items-start p-5 pl-5'>
        <div className='bg-teal-50 md:w-2/3 rounded-xl p-5'>
          <p className='text-1xl font-bold'>Meet Our Founder</p>
          <p className='text-lg font-normal py-5'>Unibazar was founded in May 2024 by Amritesh and Rahul. With a shared vision to address the complexities faced by sellers in managing multiple e-commerce platforms, they combined their expertise to create a solution that would transform the e-commerce landscape</p>
        </div>
        <img src={image} alt="meet_image"></img>
      </div>
  )
}

export default MeetFounder
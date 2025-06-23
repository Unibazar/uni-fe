import Contactinfo from './ContactInfo'
import ContactInput from './ContactInput'
const ContactDetails = () => {
  return (
    <>
      <div className='w-full justify-around text-center items-center '>
        <p className='font-bold text-xl px-5'>Contact Us</p>
        <p className='text-lg text-gray-600 px-5'>Any question or remarks? just write us a message!</p>
        <div className='w-full flex md:flex-row flex-col justify-around pt-10'>
          <Contactinfo/>
          <ContactInput/>
        </div>
      </div>
    </>
  )
}

export default ContactDetails
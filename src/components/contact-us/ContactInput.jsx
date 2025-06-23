import  { useState } from 'react';
import { Box } from '@mui/material';
import CustomTextField from '../@base/customTextfields/customTextFields';
import LettersendImg from '../../assets/unibazar-contactus-images/letter_send.png'

const ContactInput = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errorObject = {};
  
    if (!firstName) errorObject.firstName = 'First name is required';
    if (!lastName) errorObject.lastName = 'Last name is required';
    if (!email) errorObject.email = 'Email is required';
    if (!phoneNumber) errorObject.phoneNumber = 'Phone number is required';
    if (!subject) errorObject.subject = 'Subject is required';
    if (!message) errorObject.message = 'Message is required';
  
    if (Object.keys(errorObject).length > 0) {
      setError(errorObject);
    } else {
      try {
        const response = await fetch('https://admin.naturalganic.com/api/user/enquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ firstName, lastName, email, phoneNumber, subject, message }),
        });
  
        if (response.ok) {
          alert('Message sent successfully!');
          // Reset form after successful submission
          setFirstName('');
          setLastName('');
          setEmail('');
          setPhoneNumber('');
          setSubject('');
          setMessage('');
          setError({});
        } else {
          alert('Failed to send message');
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };
  
  return (
    
      <div className="w-full md:mt-0 mt-16 md:pr-28 p-5">
        <Box
          component="form"
          className='text-left justify-start justify-items-start w-full'
          onSubmit={handleSubmit}
        >
          <div className='w-full gap-4 flex flex-wrap'>
            <CustomTextField
              id="first-name"
              name="firstName"
              label="First Name"
              placeholder="John"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              error={error.firstName ? true : false}
              helperText={error.firstName}
              className='md:m-2 w-full md:w-2/5'
            />
            <CustomTextField
              id="last-name"
              name="lastName"
              label="Last Name"
              placeholder="Doe"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              error={error.lastName ? true : false}
              helperText={error.lastName}
              className='md:m-2 w-full md:w-2/5'
            />
            <CustomTextField
              id="email"
              name="email"
              label="Email"
              placeholder="john.doe@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              error={error.email ? true : false}
              helperText={error.email}
              className='md:m-2 w-full md:w-2/5'
            />
            <CustomTextField
              id="phone-number"
              name="phoneNumber"
              label="Phone Number"
              placeholder="+91-123-456-7890"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              error={error.phoneNumber ? true : false}
              helperText={error.phoneNumber}
              className='md:m-2 w-full md:w-2/5'
            />
          </div>


          <div className='w-full items-start justify-items-start text-start md:ml-2'>
            <p className='text-sm font-bold pb-2 pt-2 '>Select Subject ?</p>
            <div className='w-full flex text-[13px] font-normal gap-3 md:flex-wrap flex-col justify-start'>
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input 
                    type="radio" 
                    id="option1" 
                    name="subject"
                    value="Product or Service Inquiry"
                    checked={subject === 'Product or Service Inquiry'}
                    onChange={(event) => setSubject(event.target.value)}
                    className="appearance-none w-5 h-5 border-2 border-teal-700 rounded-full checked:bg-teal-700"
                  />
                  <div className={`absolute top-0 left-0 w-5 h-5 rounded-full flex items-center justify-center ${subject === 'Product or Service Inquiry' ? 'block' : 'hidden'}`}>
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                </div>
                <span className="ml-2">Product or Service Inquiry</span>
              </label>

              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input 
                    type="radio" 
                    id="option2" 
                    name="subject"
                    value="Technical Support Request"
                    checked={subject === 'Technical Support Request'}
                    onChange={(event) => setSubject(event.target.value)}
                    className="appearance-none w-5 h-5 border-2 border-teal-700 rounded-full checked:bg-teal-700"
                  />
                  <div className={`absolute top-0 left-0 w-5 h-5 rounded-full flex items-center justify-center ${subject === 'Technical Support Request' ? 'block' : 'hidden'}`}>
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                </div>
                <span className="ml-2">Technical Support Request</span>
              </label>

              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input 
                    type="radio" 
                    id="option3" 
                    name="subject"
                    value="Partnership or Collaboration Opportunity"
                    checked={subject === 'Partnership or Collaboration Opportunity'}
                    onChange={(event) => setSubject(event.target.value)}
                    className="appearance-none w-5 h-5 border-2 border-teal-700 rounded-full checked:bg-teal-700"
                  />
                  <div className={`absolute top-0 left-0 w-5 h-5 rounded-full flex items-center justify-center ${subject === 'Partnership or Collaboration Opportunity' ? 'block' : 'hidden'}`}>
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                </div>
                <span className="ml-2">Partnership or Collaboration Opportunity</span>
              </label>

              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input 
                    type="radio" 
                    id="option4" 
                    name="subject"
                    value="Feedback or Suggestions"
                    checked={subject === 'Feedback or Suggestions'}
                    onChange={(event) => setSubject(event.target.value)}
                    className="appearance-none w-5 h-5 border-2 border-teal-700 rounded-full checked:bg-teal-700"
                  />
                  <div className={`absolute top-0 left-0 w-5 h-5 rounded-full flex items-center justify-center ${subject === 'Feedback or Suggestions' ? 'block' : 'hidden'}`}>
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                </div>
                <span className="ml-2">Feedback or Suggestions</span>
              </label>
            </div>
          </div>
          <div className='w-full flex items-start justify-items-start md:pr-16 pl-2 pt-3 '>
            <CustomTextField
              id="message"
              name="message"
              label="Write Message"
              placeholder="Your message here..."
              multiline
              rows={4}
              fullWidth
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              error={error.message ? true : false}
              helperText={error.message}
            />
          </div>
          <div className='w-full flex flex-col md:justify-items-end md:justify-end md:items-end pt-3 md:pr-16 justify-center items-center'>
            <button
              type="submit"
              className='px-4 py-2 flex text-white bg-teal-700 rounded hover:bg-teal-800'
            >
              Send Message
            </button>
            <img src={LettersendImg} alt='letter-send-img' className='w-[350px] pr-10 pl-32 hidden md:block ' ></img>
          </div>
        </Box>
      </div>
    
  );
};

export default ContactInput;
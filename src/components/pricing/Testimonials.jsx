import React,{useState} from "react";
import Testimonial1 from "../../assets/unibazar-pricing-images/testimonial1.png";
import Testimonial2 from "../../assets/unibazar-pricing-images/testimonial2.png";
import Testimonial3 from "../../assets/unibazar-pricing-images/testimonial3.png";
import { FaArrowLeft, FaArrowRight, FaCircle, FaStar } from "react-icons/fa";
import TestimonialCard from "../widgets/TestimonialCard/TestimonialCard";

const testimonialsData = [
  {
    name: 'Rajiv Mehta',
    username: '@rajivmehta',
    rating: 4.5,
    description: 'Unibazar has completely transformed the way I manage my online business. Now, I can list products on multiple platforms in one go, saving me hours of work!',
    img: {Testimonial1}
  },
  {
    name: 'Priya Sharma ',
    username: '@priyasharma',
    rating: 4.8,
    description: 'The seamless inventory sync feature is a game changer! No more overselling issues Unibazar updates my stock across Amazon, Flipkart, and Myntra in real-time',
    img:{Testimonial2}
  },
  {
    name: 'Amit Verma',
    username: '@amitverma',
    rating: 4.8,
    description: 'As a new e-commerce seller, I struggled to manage multiple platforms. Unibazar’s dashboard made it so easy to handle orders and track performance.',
    img:{Testimonial3}
  },
  {
    name: 'Sneha Kapoor',
    username: '@snehakapoor',
    rating: 4.2,
    description: "Unibazar's automated product listing saved me so much time! Instead of manually adding products to different platforms, I do it all in one place!",
    img:{Testimonial3}
  },
  {
    name: ' Vikram Nair',
    username: '@vikramnair',
    rating: 4.5,
    description: 'The customer support is fantastic! Whenever I have an issue, the Unibazar team responds quickly and resolves it efficiently.',
    img:{Testimonial3}
  },
  // Add more testimonials as needed
];



const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [highlightedIndex, setHighlightedIndex] = useState(1); // Start with the second card highlighted

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    setHighlightedIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    setHighlightedIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const visibleTestimonials = [
    testimonialsData[currentIndex],
    testimonialsData[(currentIndex + 1) % testimonialsData.length],
    testimonialsData[(currentIndex + 2) % testimonialsData.length]
  ];
  return (
    <>
      <div className="w-full md:p-5">
        <div className="w-full justify-center items-center justify-items-center text-center">
          <h2 className="text-3xl font-bold text-gray-800">Customer quotes and feedback</h2>
          <p className="text-xl font-normal text-gray-400 py-4">
            Hear from Our Satisfied Users
          </p>
        </div>
        <div className="w-full p-5 flex flex-row justify-around items-start md:overflow-hidden overflow-y-auto md:gap-4 gap-4">
          
        {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              username={testimonial.username}
              rating={testimonial.rating}
              description={testimonial.description}
              img={testimonial.img}
              isHighlighted={index === highlightedIndex}
            />
          ))}
          
          
        </div>
        <div className="w-full flex justify-between ">
          <div className="hidden md:flex flex-row gap-3 p-10 ">
          {testimonialsData.map((_, index) => (
              <FaCircle
                key={index}
                className={`${
                  index === currentIndex
                    ? "text-teal-600 bg-teal-600 outline outline-1 outline-teal-600 w-10 h-2 rounded-lg"
                    : "text-gray-100 outline outline-1 outline-teal-600 w-2 h-2 rounded-full"
                }`}
              />
            ))}
          </div>
          <div className="flex flex-row gap-5 p-10">
          <button onClick={handlePrev}><FaArrowLeft className="rounded-full outline outline-1 outline-teal-600 text-teal-600 p-1  w-7
            h-7 cursor-pointer"/></button>
            <button onClick={handleNext}><FaArrowRight className="rounded-full bg-teal-600 text-white outline outline-1 outline-teal-600  p-1 w-7
            h-7 cursor-pointer"/></button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
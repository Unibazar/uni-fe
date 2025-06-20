'use client';
import FAQAccordion from './FAQAccordion';


const FAQ = ({FrequentlyAskedQuestion}) => {

  

  return (
    <div className=" w-full  flex-col justify-center pb-10 ">
      <h2 className="w-full font-semibold text-center text-3xl py-10">Frequently Asked Questions</h2>
     
        <FAQAccordion FAQ={FrequentlyAskedQuestion} />
      
    </div>
  );
};

export default FAQ;

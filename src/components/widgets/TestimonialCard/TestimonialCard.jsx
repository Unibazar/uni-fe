
import { FaStar } from 'react-icons/fa';

const TestimonialCard = ({ name,img, username, rating, description, isHighlighted }) => {
  return (
     <div className={`max-w-[340px] min-w-[300px] rounded-xl shadow-md ${isHighlighted ? 'outline outline-2 outline-teal-600' : ''}`}>
                <div className="justify-between flex flex-row p-5">
                  <div className="flex gap-5">
                    
                    <img
                    isBordered
            className="rounded-full"
            src={img}
            alt={name}
            width={50}
            height={50}
          />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
                      <h5 className="text-small tracking-tight text-default-400">{username}</h5>
                    </div>
                  </div>
                  <p className="flex flex-row justify-items-center  items-center  gap-1">
                  {rating} <FaStar className="text-yellow-500" />
                  </p>
                </div>
                <div className="px-3 py-0 pb-2 text-small text-default-400">
                  <p>{description}
                  </p>
                </div>
              </div>
    
      
      
   
  );
};

export default TestimonialCard;
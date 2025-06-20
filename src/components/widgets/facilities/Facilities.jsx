
const Facilities = ({ facilities }) => {
  return (
    <div className="py-5">
      {facilities.map((facilitie, index) => (
        <div key={index}
          className={`flex flex-wrap ${facilitie.reverse ? "flex-row-reverse" : ""
            } justify-evenly md:py-1 py-10`}
        >
          <div className="min-w-[32%] max-w-[345px]">
            <img src={facilitie.image} alt={facilitie.title} />
          </div>

          <div className="flex flex-col justify-center min-w-[40%]">
            <p className="text-[#08a9a0]">{facilitie.subtitle}</p>
            <h2 className="text-[30px] font-semibold m-0">{facilitie.title}</h2>
            <p className="text-[#455a64] text-[16px] whitespace-pre-line">
              {facilitie.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facilities;

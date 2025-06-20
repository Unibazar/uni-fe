import BackgroundImage from "../../../assets/unibazar-aboutus-images/story.png"

function Story() {
  return (
    <div className="relative flex items-center justify-center text-center">
        <div className="absolute -z-10 w-full">
          <img src={BackgroundImage} alt="background image" className="w-full"/>
        </div>
        <div className=" py-6 my-8 text-center bg-white rounded-xl justify-center items-center">
          <p className="font-bold   text-[28px]">Our Story</p>
          <p className="font-normal text-center px-4">
            Unibazar was founded in May 2024 by Amritesh and Rahul. With a shared vision to
            <br />
            address the complexities faced by sellers in managing multiple e-commerce platforms,
            <br />
            they combined their expertise to create a solution that would transform the e-commerce
            <br />
            landscape
          </p>
        </div>
      </div>
  )
}

export default Story
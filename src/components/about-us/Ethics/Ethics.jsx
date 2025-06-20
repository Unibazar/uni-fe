import MissionImage from '../../../assets/unibazar-aboutus-images/mission.svg';
import ValueImage from '../../../assets/unibazar-aboutus-images/value.svg';

function Ethics() {
  return (
    <div className='py-10'>
        {/*our mission */}
      <div className="w-full flex md:flex-row flex-col justify-around p-5">
        <img src={MissionImage} alt="wait"></img>
        <div className="w-full md:w-1/2 ">
          <h1 className="text-3xl font-bold text-gray-800 ">Our Mission</h1>
          <p className="text-lg text-gray-600 ">At Unibazar, we aim to simplify and revolutionize the way sellers manage their e-commerce platforms. By providing a unified, user-friendly interface, we empower businesses to seamlessly handle multiple online marketplaces, enhancing efficiency and boosting sales.</p>
        </div>
      </div>
      {/*our values */}
      <div className="w-full flex md:flex-row flex-col justify-around p-5">
        <div className="w-full md:w-1/2 p-5">
          <h1 className="text-3xl font-bold text-gray-800 ">Our Values</h1>
          <ul className="text-lg text-gray-600  list-disc">
            <li>
              <b>Innovation: </b>We continuously strive to bring cutting-edge solutions to the e-commerce industry.
            </li>
            <li>
              <b>User-Centric Design: </b>Our platform is designed with the user in mind, ensuring ease of use and accessibility.
            </li>
            <li>
              <b>Integrity: </b>We believe in transparency and honesty in all our dealings with customers and partners.
            </li>
            <li>
              <b>Customer Success: </b>Your success is our success. We are dedicated to providing tools and support to help your business thrive.
            </li>
          </ul>
        </div>
        <img src={ValueImage} alt="wait"></img>
      </div>
    </div>
  )
}

export default Ethics
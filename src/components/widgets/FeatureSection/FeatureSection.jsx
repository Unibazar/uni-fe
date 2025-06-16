import FeatureIcon1 from '../../../assets/unibazar-features-images/feature-Icon1.svg';
import FeatureIcon2 from '../../../assets/unibazar-features-images/feature-Icon2.svg';
import FeatureIcon3 from '../../../assets/unibazar-features-images/feature-Icon3.svg';

const featurs = [{
    title:'Easy Integration',
    description:"Manage all your listings from a single interface, saving you time and effort",
    icon: FeatureIcon1
},{
    title:'Unified Dashboard',
    description:"Stay informed and in control of your e-commerce operations from one central location",
    icon: FeatureIcon2
}
,{
    title:'Real-time Analytics',
    description:"Optimize your operations with data-driven insights to drive growth and profitability", 
    icon: FeatureIcon3
}
]

function FeatureSection() {
    return (
        <div className="bg-teal-50 p-7">
            <div className="">
                <h1 className='text-4xl font-semibold text-center'>Our Features</h1>
                <p className='text-center text-sm opacity-60 py-5'>
                    Unibazar offers a suite of powerful features designed to simplify and streamline your e-commerce <br />
                    operations. Here’s what you can expect
                </p>
            </div>

            <div className="flex justify-around mt-10">
                {featurs.map(item=><div className="flex items-center justify-center flex-col px-10">
                    <img src={item.icon} alt="wait.."></img>
                    <h3 className='text-xl font-semibold mb-4'>{item.title}</h3>
                    <p className="text-center text-sm opacity-60">{item.description}</p>
                </div>)}

            </div>
        </div>
    )
}

export default FeatureSection
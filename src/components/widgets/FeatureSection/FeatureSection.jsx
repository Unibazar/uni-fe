function FeatureSection({features}) {
    return (
        <div className="bg-teal-50 p-7">
            <div className="">
                <h1 className='text-4xl font-semibold text-center'>Our Features</h1>
                <p className='text-center text-sm opacity-60 py-5'>
                    Unibazar offers a suite of powerful features designed to simplify and streamline your e-commerce <br />
                    operations. Here’s what you can expect
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-15 mt-10">
                {features.map((item, idx)=><div key={idx} className="flex items-center justify-center flex-col px-10">
                    <img src={item.icon} alt="wait.."></img>
                    <h3 className='text-xl font-semibold mb-4'>{item.title}</h3>
                    <p className="text-center text-sm opacity-60">{item.description}</p>
                </div>)}

            </div>
        </div>
    )
}

export default FeatureSection
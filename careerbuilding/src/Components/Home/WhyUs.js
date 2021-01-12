const WhyUs = () => {
    return (
        <div className="bg-darkBlue font-bold text-2xl text-white"> 
            <h1> WHY CAREER BUILDING?</h1>
           
    <div className="w-full flex flex-col flex-wrap md:flex-row md:justify-around mx-auto h-full py-12 items-stretch">
      <div className="w-2/3 lg:1/3 xl:w-1/5 rounded-lg bg-darkP shadow-lg">
        <div className="px-4 py-16 bg-paleYellow shadow rounded ">
          <p className="text-darkerBlue text-3xl mb-8" >Easy Apply</p>
          <p className=" text-base text-darkerBlue ">
            {('you can apply easy by one click!')}
          </p>
        </div>
      </div>
      
      <div className="w-2/3 lg:1/3 xl:w-1/5 rounded-lg bg-darkP shadow-lg">
        <div className="px-4 py-16 bg-paleYellow shadow rounded ">
          <p className="text-darkerBlue text-3xl mb-8" >Guranteed </p>
          <p className=" text-base text-darkerBlue ">
            {(' with us you will absolutely find what you want and evreything is for guranteed!')}
          </p>
        </div>
      </div>

      <div className="w-2/3 lg:1/3 xl:w-1/5 rounded-lg bg-darkP shadow-lg">
        <div className="px-4 py-16 bg-paleYellow shadow rounded ">
          <p className="text-darkerBlue text-3xl mb-8" >Free</p>
          <p className=" text-base text-darkerBlue ">
            {('apply and be a part of us for free!')}
          </p>
        </div>
      </div>
    </div>
   
        </div>
    )
}

export default WhyUs

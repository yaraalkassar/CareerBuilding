const WhyUs = () => {
  return (
    <div className="bg-darkBlue font-bold text-2xl text-white pt-8">
      <h1> WHY CAREER BUILDING?</h1>
      <div className="w-full flex flex-col md:flex-row md:justify-around mx-auto  py-12 items-center md:items-stretch justify-between space-y-4 md:space-y-0">
        <div className="w-2/3 md:w-1/4 xl:w-1/5 rounded-lg bg-paleYellow shadow-xl">
          <div className="px-4 py-16 rounded ">
            <p className="text-darkerBlue text-3xl mb-8">Easy Apply</p>
            <p className=" text-base text-darkerBlue ">
              {"You can apply easy by one click!"}
            </p>
          </div>
        </div>

        <div className="w-2/3 md:w-1/4 xl:w-1/5 rounded-lg bg-paleYellow shadow-xl">
          <div className="px-4 py-16 rounded ">
            <p className="text-darkerBlue text-3xl mb-8">Guranteed </p>
            <p className=" text-base text-darkerBlue ">
              {
                "With us you will absolutely find what you want and evreything is for guranteed!"
              }
            </p>
          </div>
        </div>

        <div className="w-2/3 md:w-1/4 xl:w-1/5 rounded-lg bg-paleYellow shadow-xl">
          <div className="px-4 py-16 rounded ">
            <p className="text-darkerBlue text-3xl mb-8">Free</p>
            <p className=" text-base text-darkerBlue ">
              {"Apply and be a part of us for free!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

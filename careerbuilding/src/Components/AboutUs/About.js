import React from "react";
import Footer from "../Home/Footer";
import volunteer from "../images/volunteer-logo.png";

const About = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 pt-10 pb-24 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="rounded-lg w-3/4 mx-auto">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={volunteer}
              />
            </div>
            <div class="flex flex-col sm:flex-row mt-10 justify-center items-center">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-darkerBlue text-lg">
                    Career Building
                  </h2>
                  <div class="w-12 h-1 bg-paleYellow rounded mt-2 mb-4"></div>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-relaxed text-lg mb-4 font-light">
                  <span className=" font-medium border-b border-paleYellow">
                    Career Building
                  </span>
                  {"   "} is a website that will provide you with amazing
                  internship and volunteering oppurtunities to make your
                  work-life after college{" "}
                  <span className="font-medium text-paleYellow">EASIER!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default About;

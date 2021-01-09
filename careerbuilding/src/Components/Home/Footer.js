import React from "react";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import Instagram from "../images/instagram.png";
import Quotes from "../images/quotes.svg";
import Logo from "../images/goal.svg";

export default function Footer() {
  // async function addFeedback(body) {
  //   try {
  //     await firebase.sendFeedback(body);
  //   } catch {
  //     alert("not working");
  //   }
  // }

  return (
    <footer className=" bg-paleBlue text-darkerBlue">
      <div className="border-b border-darkBlue py-8">
        <div className="container flex flex-col md:flex-row md:justify-between px-5 mx-auto">
          <div className="flex flex-wrap lg:text-left text-center mx-auto md:mx-0">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-center items-center">
              <div className="leading-relaxed w-56 font-medium">
                <p>{"blah blah"}</p>
                <img src={Quotes} className="ml-auto mr-2" alt="Quotes" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around mt-4 items-center py-2">
        <div>
          <img src={Logo} className="w-16 h-16" alt="logo" />
        </div>
        <p>© 2021 Career Building </p>

        <div className="flex flex-row justify-around w-24 ">
          <div>
            <img src={Facebook} className="w-6 h-6" alt="Facebook" />
          </div>
          <div>
            <img src={Instagram} className="w-6 h-6" alt="Instagram" />
          </div>
          <div>
            <img src={Twitter} className="w-6 h-6" alt="Twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
}

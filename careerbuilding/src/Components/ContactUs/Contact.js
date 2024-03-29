import React, { useState } from "react";
import Footer from "../Home/Footer";
import firebase from "../../firebase/firebase";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(name, email, message) {
    firebase.sendFeedback(name, email, message);
  }
  return (
    <>
      <section className="text-darkBlue body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-darkerBlue">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Please don't hestitate to contact us for any feedback or
              questions!
            </p>
          </div>
          <div className="lg:w-1/3 md:w-2/3 mx-auto">
            <form className="flex flex-wrap ">
              <div className="p-2 w-1/2">
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkerBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkerBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkerBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-paleYellow border-0 py-2 px-8 focus:outline-none hover:bg-dakBlue rounded text-lg"
                  onClick={() => {
                    handleSubmit(userName, email, message);
                  }}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};
export default Contact;

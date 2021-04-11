import React, { useState } from "react";
import firebase from "../../firebase/firebase";
import { Link, useHistory } from "react-router-dom";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  if (firebase.getCurrentUsername()) {
    history.push("/profile");
    return null;
  }

  return (
    <section className="text-white body-font ">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
        <div className="lg:w-1/4 md:w-1/2 bg-paleYellow rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
          <h2 className="text-black text-lg font-medium title-font mb-5">
            Sign In
          </h2>
          <div className="flex flex-col items-start mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-darkerBlue"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="flex flex-col items-start mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-darkerBlue"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              login();
            }}
            className="text-white bg-darkerBlue border-0 py-2 px-8 focus:outline-none hover:bg-darkBlue rounded text-lg"
          >
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
  async function login() {
    try {
      await firebase.login(email, password);
      history.push("/profile");
    } catch (error) {
      alert(error.message);
    }
  }
};

export default Form;

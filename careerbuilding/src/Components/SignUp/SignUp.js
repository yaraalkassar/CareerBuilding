import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../firebase/firebase";
import { useForm } from "react-hook-form";
import BusinessSignUp from "./BusinessSignUp";
import { Switch, Route } from "react-router-dom";

import "./toggleStyle.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isBusiness, setIsBusiness] = useState(false);
  let history = useHistory();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = () => {
    if (isBusiness) {
      history.push("/Join/Join-Business");
      setIsBusiness(false);
    } else {
      onRegister().then(() => {
        history.push("/profile");
      });
    }
  };

  return (
    <Switch>
      <Route exact path="/Join/Join-Business">
        <BusinessSignUp email={email} password={password} />
      </Route>

      <Route exact path="/Join">
        <section className="text-gray-600 body-font ">
          <div className="container px-5 py-16 mx-auto flex flex-wrap items-center justify-center">
            <div className="lg:w-1/4 md:w-1/2 bg-paleBlue rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
              <h2 className="text-darkerBlue text-lg md:text-2xl font-medium title-font mb-5">
                Sign Up
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit();
                }}
              >
                <div className="flex flex-col items-start mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    ref={register({
                      required: "Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    })}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white rounded border border-gray-300 focus:border-darkerBlue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <p className="error-color">
                    {errors.email && errors.email.message}
                  </p>
                </div>
                <div className="flex flex-col items-start mb-4">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full bg-white rounded border border-gray-300 focus:border-darkerBlue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    minLength="6"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-center w-full mb-8 mt-8 text-sm">
                  <label
                    htmlFor="toogleA"
                    className="flex items-center cursor-pointer"
                  >
                    <div className="mr-3 text-darkP font-medium">Student</div>
                    <div className="relative">
                      <input
                        id="toogleA"
                        type="checkbox"
                        className="hidden"
                        onChange={() => {
                          isBusiness
                            ? setIsBusiness(false)
                            : setIsBusiness(true);
                        }}
                      />
                      <div className="toggle__line w-8 h-3 bg-white rounded-full shadow-inner"></div>
                      <div className="toggle__dot absolute w-5 h-5 bg-darkerBlue rounded-full shadow "></div>
                    </div>
                    <div className="ml-3 text-darkP font-medium">
                      Business Owner
                    </div>
                  </label>
                </div>
                <button className="text-white bg-darkBlue border-0 py-2 px-8 focus:outline-none hover:bg-darkerBlue rounded text-lg">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </section>
      </Route>
    </Switch>
  );
  async function onRegister() {
    try {
      if (isBusiness) {
        await firebase.register(email, password);
        await firebase.addUser(isBusiness, email);
      } else {
        await firebase.register(email, password);
        history.push("/profile");
      }
    } catch (error) {
      alert(error.message);
    }
  }
};

export default SignUp;

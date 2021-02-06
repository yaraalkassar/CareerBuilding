import React, { useState } from "react";
import firebase from "./../../firebase/firebase";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

function BusinessSignUp() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [userName, setUserName] = useState("");
  const [businessLogo, setBusinessLogo] = useState("");
  const [position, setPosition] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const { register, errors } = useForm();

  return (
    <div className="container px-5 py-10 mx-auto flex flex-wrap items-center justify-center">
      <div className="md:w-1/2 flex flex-col justify-center items-center">
        <div className="py-3">
          <h2 className="text-darkerBlue text-lg md:text-2xl font-medium title-font mb-2">
            Business Sign Up
          </h2>
          <p className="capitalize text-darkBlue mb-2">
            Please bear with us, we need to know more about you!
          </p>
        </div>
        <form className="md:w-3/4 bg-paleYellow p-8 text-darkP flex flex-col justify-evenly items-center rounded">
          <div className="flex flex-col items-start w-full mb-4">
            <label htmlFor="email" className="w-full mb-2 text-left">
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
          </div>{" "}
          <div className="flex flex-col items-start w-full mb-4">
            <label htmlFor="password" className="w-full mb-2 text-left">
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
          <div className="flex flex-col w-full mb-5">
            <div className="w-full mb-2 text-left">
              <label>Company Name:</label>
            </div>
            <div>
              <input
                className="border border-darkP rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-darkBeige"
                id="inline-full-name"
                type="text"
                placeholder="Your Company's Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5">
            <div className="w-full mb-2 text-left">
              <label>Logo:</label>
            </div>
            <div className="w-full">
              <div className="flex items-center overflow-hidden relative">
                <input
                  className="border border-darkP rounded w-full py-2 px-4 bg-white leading-tight focus:outline-none focus:bg-white focus:border-darkBeige"
                  type="file"
                  id="profile_pic"
                  name="profile_pic"
                  accept="image/*"
                  onChange={async (e) => {
                    await firebase.uploadFile(
                      e.target.files[0],
                      `profile-images/${email}/image`
                    );
                    await firebase
                      .downloadFile(`profile-images/${email}/image`)
                      .then((url) => {
                        setBusinessLogo(url);
                      });
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5">
            <div className="w-full mb-2 text-left">
              <label>Your Name:</label>
            </div>
            <div>
              <input
                className="border border-darkP rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-darkBeige"
                id="inline-full-name"
                type="text"
                placeholder="Your Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5">
            <div className="w-full mb-2 text-left">
              <label>Position In Company:</label>
            </div>
            <div>
              <input
                className="border border-darkP rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-darkBeige"
                id="inline-full-name"
                type="text"
                placeholder="Your Position in the Company"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5">
            <div className="w-full mb-2 text-left">
              <label>Company's Phone Number:</label>
            </div>
            <div>
              <input
                className="border border-darkP rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-darkBeige"
                id="inline-full-name"
                type="tel"
                placeholder="Your Company's Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5">
            <div className="w-full mb-2 text-left">
              <label>Company's Location:</label>
            </div>
            <div>
              <input
                className="border border-darkP rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-darkBeige"
                id="inline-full-name"
                type="tel"
                placeholder="Your Company's Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="flex items-center justify-end w-full mt-5">
            <div className="md:w-1/5 md:mx-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/Join");
                }}
                className="shadow-md w-full bg-white focus:shadow-outline focus:outline-none text-darkP py-2 px-4 rounded"
                type="button"
              >
                Cancel
              </button>
            </div>
            <div className="md:w-1/5 md:ml-2 ml-8">
              <button
                className="shadow bg-darkerBlue w-full focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  onRegister();
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>{" "}
    </div>
  );

  async function onRegister() {
    try {
      await firebase.register(email, password);
      await firebase.addUser(
        true,
        email,
        companyName,
        businessLogo,
        position,
        number,
        location
      );
      history.push("/profile");
    } catch (error) {
      alert(error.message);
    }
  }
}

// BusinessSignUp.propTypes = {
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
// };

export default BusinessSignUp;

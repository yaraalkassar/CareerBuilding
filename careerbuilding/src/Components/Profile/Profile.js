import React, { useState, useEffect } from "react";
import firebase from "../../firebase/firebase";
import Moment from "react-moment";

function Profile() {
  const [currentUser, setCurrentUser] = useState([]);
  const [time, setTime] = useState();
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      await firebase.getCurrentUser().then((currentUser) => {
        setCurrentUser(currentUser);
        setTime(currentUser.dateJoined.toDate());
      });
    } catch {
      alert("not working");
    }
  }

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div class="w-full sm:p-4 px-4 mb-6">
            <h1 class="title-font font-medium text-xl mb-2 text-gray-900">
              My Company Name: {currentUser.companyName}
            </h1>
            <div class="leading-relaxed">
              <p>My Position: {currentUser.position}</p>
            </div>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/2 w-1/2">
            <h2 class="title-font font-medium text-3xl text-gray-900">Email</h2>
            <p class="leading-relaxed">{currentUser.email}</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/2 w-1/2">
            <h2 class="title-font font-medium text-3xl text-gray-900">Phone</h2>
            <p class="leading-relaxed"> {currentUser.number}</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/2 w-1/2">
            <h2 class="title-font font-medium text-3xl text-gray-900">
              Location
            </h2>
            <p class="leading-relaxed">{currentUser.location}</p>
          </div>
          <div class="p-4 sm:w-1/2 lg:w-1/2 w-1/2">
            <h2 class="title-font font-medium text-3xl text-gray-900">
              Date Joined
            </h2>
            <p class="leading-relaxed">
              <Moment fromNow>{time}</Moment>
            </p>
          </div>
        </div>
        <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            class="object-cover object-center w-full h-full"
            src={currentUser.businessLogo}
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;

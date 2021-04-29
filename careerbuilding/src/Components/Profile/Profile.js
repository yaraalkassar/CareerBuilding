import React from "react";
import firebase from "../../firebase/firebase";
function Profile() {
  let data = firebase.getCurrentUser().then((currentUser) => {
    console.log(currentUser);
  });
  return (
    <div>
      <p>hi</p>
    </div>
  );
}

export default Profile;

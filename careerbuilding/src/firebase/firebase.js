import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB_d12TRRhe-ETuuWI3gTZLCAN__IrQ1Tw",
  authDomain: "career-building.firebaseapp.com",
  projectId: "career-building",
  storageBucket: "career-building.appspot.com",
  messagingSenderId: "663344565178",
  appId: "1:663344565178:web:f3b6c6f707d5d6c7a52b83",
  measurementId: "G-Z0EEWVVW54",
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.firestore = firebase.firestore;
    this.rtdb = firebase.database();
    this.storage = firebase.storage();
    this.storageRef = this.storage.ref();
    this.currentUser = {};
    this.listenerId = null;
    this.chatroomObj = null;
    this.unsubscribe = null;
    this.conversationId = null;
  }

  async queryUsersCollectionForMatchingUsername(searchedValue, setFoundUsers) {
    const foundUsers = [];
    return await this.db
      .collection("users")
      .where("username", "==", `${searchedValue}`)
      .get()
      .then((data) =>
        data.forEach((doc) => foundUsers.push({ uid: doc.id, ...doc.data() }))
      )
      .then(() => setFoundUsers(foundUsers));
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.auth.signOut();
  }

  async register(email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({});
  }

  async addUser(
    isBusinessOwner,
    email,
    companyName,
    businessLogo,
    position,
    number,
    location
  ) {
    if (!this.auth.currentUser) {
      return alert("not authorized");
    }
    return this.db
      .collection("users")
      .doc(`${this.auth.currentUser.uid}`)
      .set({
        uid: this.auth.currentUser.uid,
        dateJoined: firebase.firestore.Timestamp.now(),
        isBusinessOwner,
        email,
        ...(isBusinessOwner && {
          companyName,
          businessLogo,
          position,
          number,
          location,
        }),
      });
  }

  isInitialized() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  getCurrentUid() {
    return this.auth.currentUser && this.auth.currentUser.uid;
  }

  async getCurrentUser() {
    const user = await this.db
      .collection("users")
      .doc(`${this.auth.currentUser.uid}`)
      .get();
    this.currentUser = user.data();
    return user.data();
  }

  async downloadFile(path) {
    return await this.storageRef.child(`${path}`).getDownloadURL();
  }

  async uploadFile(file, path) {
    let ref = await this.storageRef.child(`${path}`);
    await ref.put(file).then(function () {
      console.log("Uploaded a blob or file!");
    });
  }
  async createVacancy(j_name, j_desc, j_req, j_resp, j_type) {
    const id = this.db.collection("vacancies").doc().id;
    await this.db
      .collection("vacancies")
      .doc(id)
      .set({
        v_Id: id,
        // authorId: this.getCurrentUid(),
        // createdAt: new Date().toLocaleString("en-US"),
        // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        // authorName: this.getCurrentUsername(),
        // authorAvatar: this.currentUser.profilePicture,
        j_name: j_name,
        j_desc: j_desc,
        j_req: j_req,
        j_resp: j_resp,
        j_type: j_type,
      })
      .catch((err) => console.log(err));
  }

  async getVacanies(setVacancies) {
    this.db
      .collection("vacancies")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const vacancies = snapshot.docs.map((post) => {
          return post.data();
        });
        setVacancies(vacancies);
      });
  }

  async getUserPosts(setPosts, uid) {
    this.db
      .collection("posts")
      .where("authorId", "==", uid ? uid : this.getCurrentUid())
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const posts = snapshot.docs.map((post) => {
          return post.data();
        });
        setPosts(posts);
      });
  }

  async getFriendsPosts(setPosts) {
    await this.getCurrentUser();
    const feedList = [...this.currentUser.friends, this.currentUser.uid];
    this.db
      .collection("posts")
      .where("authorId", "in", feedList)
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const posts = snapshot.docs.map((post) => {
          return post.data();
        });
        setPosts(posts);
      });
  }

  async sendFeedback(body) {
    const id = this.db.collection("feedback").doc().id;
    await this.db
      .collection("feedback")
      .doc(id)
      .set({
        createdAt: new Date().toLocaleString("en-US"),
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        text: body,
      })
      .catch((err) => console.log(err));
  }

  async checkUsername(username) {
    let notExists = true;
    await this.db
      .collection("users")
      .where("username", "==", username)
      .get()
      .then((doc) => {
        notExists = doc.empty;
      })
      .catch((err) => {
        console.log("Error getting document", err);
      });
    return notExists;
  }
}

export default new Firebase();

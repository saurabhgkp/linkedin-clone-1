import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBwGuhkxD1DU2-_7sNN7xKNLdO8HjRy8xo",
    authDomain: "linkedin-clone-570e5.firebaseapp.com",
    projectId: "linkedin-clone-570e5",
    storageBucket: "linkedin-clone-570e5.appspot.com",
    messagingSenderId: "86040891135",
    appId: "1:86040891135:web:094ebf64fb644e251a86ca"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
    const auth = firebase.auth();

  export {db, auth};
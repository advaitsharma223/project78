import {firebase} from '@firebase/app';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCC_cw4lBBwG0yApsx1d_gg1w5pSxD8_2Y",
    authDomain: "project77-41858.firebaseapp.com",
    projectId: "project77-41858",
    storageBucket: "project77-41858.appspot.com",
    messagingSenderId: "599969612558",
    appId: "1:599969612558:web:304bceda99d572b5c10d5f"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();
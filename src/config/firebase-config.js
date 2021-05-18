import firebase from 'firebase';
import "firebase/auth";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCD7fbn30QKomeNCyfm2_l9_dsN0znv-Jo",
    authDomain: "oauth-authentication-311408.firebaseapp.com",
    projectId: "oauth-authentication-311408",
    storageBucket: "oauth-authentication-311408.appspot.com",
    messagingSenderId: "709095730810",
    appId: "1:709095730810:web:6be89c967b71237493d5c3",
    measurementId: "G-9817R8EXGR"
  };

firebase.initializeApp(firebaseConfig)

export default firebase;

//  const fire = firebase.initialApp(firebaseConfig);
//  firebase.analytics();

//  export default fire;




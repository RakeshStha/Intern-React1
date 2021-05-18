import firebase from '../config/firebase-config';
import "firebase/auth" 

export var facebookProvider = new firebase.auth.FacebookAuthProvider();
export var googleProvider = new firebase.auth.GoogleAuthProvider();
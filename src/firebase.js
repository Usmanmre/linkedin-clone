import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyALxYK19csYhQbl7m4sW3_7uQFEpKAUd4o",
  authDomain: "linkedin-clone-25f2e.firebaseapp.com",
  projectId: "linkedin-clone-25f2e",
  storageBucket: "linkedin-clone-25f2e.appspot.com",
  messagingSenderId: "854040521393",
  appId: "1:854040521393:web:b6d19ab1e3681913b55090"
};
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();

  export default firebase;
  export { db, auth};
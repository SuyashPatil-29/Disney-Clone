import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDjucB4ciXuAjTpB6sppcj8c-Dv81NV9-Q",
  authDomain: "disney-plus-clone-359a4.firebaseapp.com",
  projectId: "disney-plus-clone-359a4",
  storageBucket: "disney-plus-clone-359a4.appspot.com",
  messagingSenderId: "917066383074",
  appId: "1:917066383074:web:3a845ad65c91fbabdc28bb"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);


export { auth, provider, storage};
export default db;























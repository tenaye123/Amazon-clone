import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsjNFIkfx4dZXgFzPWASq_wmdJAAnz0ac",
  authDomain: "fir-eefcc.firebaseapp.com",
  projectId: "fir-eefcc",
  storageBucket: "fir-eefcc.appspot.com",
  messagingSenderId: "56985792949",
  appId: "1:56985792949:web:fb875f509d5d6a624ba9fc",
  measurementId: "G-V9JWJEEGP1",};
const app=firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
const db=app.firestore();

export {db,auth};

// import { initializeApp } from "firebase/app";
// import { getAuth} from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBsjNFIkfx4dZXgFzPWASq_wmdJAAnz0ac",
//   authDomain: "fir-eefcc.firebaseapp.com",
//   projectId: "fir-eefcc",
//   storageBucket: "fir-eefcc.appspot.com",
//   messagingSenderId: "56985792949",
//   appId: "1:56985792949:web:fb875f509d5d6a624ba9fc",
//   measurementId: "G-V9JWJEEGP1",
// };

// // // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// // const db = app.firestore();
// export{auth};

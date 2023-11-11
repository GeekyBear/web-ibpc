import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, "cities");
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());
//   return cityList;
// }

const handleSubmit = (testdata) => {
  const ref = collection(db, "test_data"); // Firebase creates this automatically

  let data = {
    testData: testdata,
  };

  try {
    addDoc(ref, data);
  } catch (err) {
    console.log(err);
  }
};

const getPrays = async () => {
  const querySnapshot = await getDocs(collection(db, "prays"));
  return querySnapshot;
};

export { getPrays, handleSubmit };

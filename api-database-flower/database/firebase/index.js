const { initializeApp } = require("firebase/app");
const { getDatabase, ref, onValue } = require("firebase/database");
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  appId: process.env.APPID,
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dataRef = ref(database, "data");

onValue(dataRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

// rules_version = '2';
// service firebase.storage {
//   match /b/images/o {
//     match /{allPaths=**} {
//       allow read, write: if true;
//     }
//   }
// } database rules

import Firebase from "firebase";
const config = {
  apiKey: "AIzaSyDUUVrLF6p6pOPY2E6wxWXOOKmtsjNKml4",
  authDomain: "library-b5686.firebaseapp.com",
  databaseURL: "https://library-b5686.firebaseio.com",
  projectId: "library-b5686",
  storageBucket: "library-b5686.appspot.com",
  messagingSenderId: "783411109646",
  appId: "1:783411109646:web:44e854326cbbd85c15015f",
  measurementId: "G-HMJHCEMYQ0"
};
Firebase.initializeApp(config);

const rootRef = Firebase.database().ref();
export const booksRef = rootRef.child("Books");

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1VWcFK14IxCYPMU1l0TAzTs6TILUstrU",
    authDomain: "fir-reactjs-5c32a.firebaseapp.com",
    databaseURL: "https://fir-reactjs-5c32a.firebaseio.com",
    projectId: "fir-reactjs-5c32a",
    storageBucket: "fir-reactjs-5c32a.appspot.com",
    messagingSenderId: "57951941232",
    appId: "1:57951941232:web:3a412d45a6d4e332127ab5",
    measurementId: "G-MWPYHQ503F"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
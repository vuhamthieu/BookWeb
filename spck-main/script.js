// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdoJGSrZtRN8uLvsTtO1fwpEHJjmkEWMw",
    authDomain: "book-store-4b357.firebaseapp.com",
    projectId: "book-store-4b357",
    storageBucket: "book-store-4b357.appspot.com",
    messagingSenderId: "410795088368",
    appId: "1:410795088368:web:8a75a50a78aa340f482535"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

import {
    getFirestore,
    doc,
    getDocs,
    getDoc,
    setDoc,
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    deleteField,
    query,
    where,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const displayUsername = async () => {
    const docRef = doc(db, "users", localStorage.getItem("userUID"));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        document.getElementById('username').innerHTML = docSnap.data().name;
        document.getElementById('sign-up').remove();
        document.getElementById('username').onclick = (e) => {
            e.preventDefault();
            localStorage.removeItem("usernameRegis");
            localStorage.removeItem("userUID");
            localStorage.removeItem("accessToken"); 
            window.location.href = "../Sign-in-sign-up/sign.html";
        }
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}
displayUsername();
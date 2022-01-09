if (localStorage.getItem("accessToken") != null) {
    window.location.href = "../spck-main/sanh.html";
}

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
const auth = getAuth(app);
// const db = getFirestore();

// import {
//     getFirestore,
//     doc,
//     getDocs,
//     setDoc,
//     collection,
//     addDoc,
//     updateDoc,
//     deleteDoc,
//     deleteField,
//     query,
//     where,
// } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import {
    getDatabase,
    ref,
    set,
    onValue,
    child
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

//Registration
document.getElementById('buttonRegis').onclick = (e) => {
    e.preventDefault();

    const usernameRegis = document.getElementById('usernameRegis').value;
    const emailRegis = document.getElementById('emailRegis').value;
    const passwordRegis = document.getElementById('passwordRegis').value;

    // await setDoc(doc(db, "users", email), {
    //     username: usernameRegis,
    //     email: emailRegis,
    //     password: passwordRegis,
    // });

    createUserWithEmailAndPassword(auth, emailRegis, passwordRegis)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log("created");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..

            console.log(errorCode + errorMessage);
        });
}

//Login
document.getElementById('buttonLog').onclick = async (e) => {
    e.preventDefault();

    const emailLog = document.getElementById('emailLog').value;
    const passwordLog = document.getElementById('passwordLog').value;

    signInWithEmailAndPassword(auth, emailLog, passwordLog)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log("login success");
            console.log(user);
            localStorage.setItem("accessToken", user.accessToken);
            console.log(localStorage.getItem("accessToken"))
            console.log(user.uid);
            localStorage.setItem("userUID", user.uid);

            window.location.href = "../spck-main/sanh.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode + errorMessage);
        });

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user);
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });

    // if (emailLog != "" && passwordLog != "") {
    //     const q = query(collection(db, "users"), where("email", "==", emailLog));
    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());

    //         let passwordGet = doc.data().password;
    //         if (passwordLog == passwordGet) {
    //             let user = doc.data();
    //             let userId = doc.id;
                
    //             localStorage.setItem("user", JSON.stringify(user));
    //             localStorage.setItem("userId", userId);
    //             window.location.href = "../index.html";
    //         }
    //     })
    // }
}
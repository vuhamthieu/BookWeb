import {
    getFirestore,
    doc,
    getDocs,
    setDoc,
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    deleteField,
    query,
    where,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

var db = getFirestore();

//Registration
document.getElementById('buttonRegis').onclick = async (e) => {
    e.preventDefault();

    const usernameRegis = document.getElementById('usernameRegis').value;
    const emailRegis = document.getElementById('emailRegis').value;
    const passwordRegis = document.getElementById('passwordRegis').value;

    await setDoc(doc(db, "users", email), {
        username: usernameRegis,
        email: emailRegis,
        password: passwordRegis,
    })
}

//Login
document.getElementById('buttonLog').onclick = async (e) => {
    e.preventDefault();

    const emailLog = document.getElementById('emailLog').value;
    const passwordLog = document.getElementById('passwordLog').value;

    if (emailLog != "" && passwordLog != "") {
        const q = query(collection(db, "users"), where("email", "==", emailLog));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());

            let passwordGet = doc.data().password;
            if (passwordLog == passwordGet) {
                window.location.href = "../index.html";
            }
        })
    }

}
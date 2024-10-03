import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB5Wck_Uux3u2e57hW8CyVRyviO0hRrCjQ",
    authDomain: "sghj-dc78b.firebaseapp.com",
    projectId: "sghj-dc78b",
    storageBucket: "sghj-dc78b.appspot.com",
    messagingSenderId: "478945959233",
    appId: "1:478945959233:web:1fd4bb3bd16c2e49bb95c0",
    measurementId: "G-F63F7WH44D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", function() {
    const dialog = document.getElementById("dialog");
    dialog.style.display = "block";

    
    document.getElementById("closeDialogBtn").addEventListener("click", function() {
        dialog.style.display = "none";
    });

    
    const navItems = document.querySelectorAll(".nav-item");
    const cards = document.querySelectorAll(".card");

    navItems.forEach(item => {
        item.addEventListener("click", function() {
            navItems.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
            cards.forEach(card => card.style.display = "none");
            const target = this.getAttribute("data-target");
            document.getElementById(target).style.display = "block";
        });
    });

    
    const incrementBtn = document.getElementById("incrementBtn");
    const decrementBtn = document.getElementById("decrementBtn");

    const robotDocRef = doc(db, "data", "robot");

    incrementBtn.addEventListener("click", async () => {
        await updateDoc(robotDocRef, {
            value: increment(1)
        });
        console.log("nambah");
    });

    decrementBtn.addEventListener("click", async () => {
        await updateDoc(robotDocRef, {
            value: increment(-1)
        });
        console.log("minus");
    });
});



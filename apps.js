import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

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

const authCard = document.getElementById("authCard");
const authHeader = document.getElementById("authHeader");
const authForm = document.getElementById("authForm");
const authButton = document.getElementById("authButton");
const toggleAuth = document.getElementById("toggleAuth");
const toggleLink = document.getElementById("toggleLink");

let isLoginMode = true;

authForm.addEventListener("submit", async (e) => {
    e.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        if (isLoginMode) {
            
            await signIn(email, password);
        } else {
            
            await signUp(email, password);
        }
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
});


const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Pendaftaran berhasil! Silakan masuk.");
    toggleMode(); 
};


const signIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login berhasil!");
    window.location.href = "second.html";
};

toggleLink.addEventListener("click", toggleMode);

function toggleMode() {
    isLoginMode = !isLoginMode;
    authHeader.textContent = isLoginMode ? "Login" : "Signup";
    authButton.textContent = isLoginMode ? "Login" : "Signup";
    toggleAuth.innerHTML = isLoginMode ? 
        "Belum memiliki akun? <span id='toggleLink'>Signup</span>" : 
        "Sudah memiliki akun? <span id='toggleLink'>Login</span>";
}
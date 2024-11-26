import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {
    addDoc,
    collection,
    getFirestore
} from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
    apiKey: "AIzaSyCh8QPnH41SfIlQFK0vftiTzAv1G2tmh5U",
    authDomain: "netflix-clone-8f337.firebaseapp.com",
    projectId: "netflix-clone-8f337",
    storageBucket: "netflix-clone-8f337.firebasestorage.app",
    messagingSenderId: "48063247752",
    appId: "1:48063247752:web:e76b9ea80a9598a596f63d",
    measurementId: "G-72S9CPRB21"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



const signUp = async (name, email, password) => {
    try {
        // Create user with Firebase Authentication
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        // Add user information to the Firestore "user" collection
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name: name,
            authProvider: "local",
            email: email,
        });

        console.log("User signed up and added to Firestore");
    } catch (error) {
        console.error("Error during sign up:", error);
        toast.error("Something went wrong!");
    }
};



const login = async (email, password) => {
    try {
        signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error.message);
        toast.error("Something went wrong!");
    }
}


const logOut = () => {
    signOut(auth);
}

export {
    auth,
    db,
    login,
    signUp,
    logOut
}
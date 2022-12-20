import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC92_F4DuBRbDPkusQa884IZHkYkjuyGPU",
    authDomain: "mathwithelias.firebaseapp.com",
    projectId: "mathwithelias",
    storageBucket: "mathwithelias.appspot.com",
    messagingSenderId: "229100597571",
    appId: "1:229100597571:web:70fb9528cc392794c3bff6",
    measurementId: "G-E9ZHDYC94M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export async function setTask({title, description}) {

    try {
        const docRef = await addDoc(collection(db, "tasks"), {
            title, description
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}



import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB14eSmmvXum6-CqIo1p7S7LLLG6M1aX7Q",
    authDomain: "freelancing-website-b5c7b.firebaseapp.com",
    projectId: "freelancing-website-b5c7b",
    storageBucket: "freelancing-website-b5c7b.appspot.com",
    messagingSenderId: "7801142369",
    appId: "1:7801142369:web:1b42caffe2af3385363e20",
    measurementId: "G-XLMK3PQDK4"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
} else {
    firebase.app();
}

const Gprovider = new firebase.auth.GoogleAuthProvider();
// const Fprovider = new firebase.auth.FacebookAuthProvider();
export const login = async () => {
    const res = await firebase.auth().signInWithPopup(Gprovider)
    return res.user
}

export const logout = async () => {
    await firebase.auth().signOut()
}

export const emailLogin = async (email, password) => {
    const res = await firebase.auth().signInWithEmailAndPassword(email, password)
    console.log(res.user)
    return res.user
}

export const emailSignUp = async (email, password) => {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
    return res.user
}

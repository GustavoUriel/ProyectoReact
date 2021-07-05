import firebase from 'firebase/app';
import '@firebase/firestore';

const fb = firebase.initializeApp({
    apiKey: "AIzaSyAgGqLFTNItz-HQES7bdJGUcwfWvwQPEDo",
    authDomain: "reactproyect-coderhouse.firebaseapp.com",
    projectId: "reactproyect-coderhouse",
    storageBucket: "reactproyect-coderhouse.appspot.com",
    messagingSenderId: "326791823247",
    appId: "1:326791823247:web:abe746165f98ed30a015fa",
    measurementId: "G-7WPJJKPTQ2"
});

export function getFirebase() {
  return fb;
}

export function getFirestore() {
  return firebase.firestore(fb);
}

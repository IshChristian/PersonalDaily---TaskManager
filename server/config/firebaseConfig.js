// Import the necessary functions from Firebase SDK
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

// Firebase configuration from your Firebase project
const firebaseConfig = {
  apiKey: "AIzaSyALiH_o9IVTOv_GpnzefBeKc5nSmM6mXHc",
  authDomain: "personaldaily-b405d.firebaseapp.com",
  projectId: "personaldaily-b405d",
  storageBucket: "personaldaily-b405d.appspot.com",
  messagingSenderId: "88296292719",
  appId: "1:88296292719:web:a726b7374eaaaa21ee689a",
  measurementId: "G-9F5PJSKN4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

module.exports = db;

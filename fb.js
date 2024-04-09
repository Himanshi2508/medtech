
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDMqbfGhaT7H1nYD0cibNfJJVnqZNs7-BA",
    authDomain: "medtech-8bffd.firebaseapp.com",
    databaseURL: "https://medtech-8bffd-default-rtdb.firebaseio.com",
    projectId: "medtech-8bffd",
    storageBucket: "medtech-8bffd.appspot.com",
    messagingSenderId: "1001925655325",
    appId: "1:1001925655325:web:3317275e60838e25097ff4",
    measurementId: "G-RLHFEVVPVF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const email=document.getElementById('email').value;
  const password=document.getElementById('password').value;
  const submit=document.getElementById('submit');
  submit.addEventListener("click",function(event){
    event.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("creating account")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
  })
(function() {

    //Install Firebase
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBS2epzYcS3PlS-ftGpP1jiZqjWxQWfUAA",
        authDomain: "gb-signupsignin.firebaseapp.com",
        databaseURL: "https://gb-signupsignin.firebaseio.com",
        projectId: "gb-signupsignin",
        storageBucket: "gb-signupsignin.appspot.com",
        messagingSenderId: "1000282152659",
        appId: "1:1000282152659:web:69ce8b19871768a4cefe26",
        measurementId: "G-Q8EVWMJQLX",
  };
    // Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');

    //Add login event
    btnLogin.addEventListener('click', e => {
        //Get email and pass
        const email = txtEmail.value;
        const password = txtPassword.value;
        const auth = firebase.auth();
        // Sign In
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log("No user account"));

    });

    //Add signup event
    btnSignUp.addEventListener('click', e => {
        //Get email and pass
        // TODO: Check for real email
        const email = txtEmail.value;
        const password = txtPassword.value;
        const auth = firebase.auth();
        // Sign In
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log("No user account"));

    });

}());
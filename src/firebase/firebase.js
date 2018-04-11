import * as firebase from 'firebase';
 const config = {
    apiKey: "AIzaSyAYrRgVI86EKtgJYiSFpF0hMhvPPJenJ6o",
    authDomain: "expensify-7147a.firebaseapp.com",
    databaseURL: "https://expensify-7147a.firebaseio.com",
    projectId: "expensify-7147a",
    storageBucket: "expensify-7147a.appspot.com",
    messagingSenderId: "1015203329686"
  };
  firebase.initializeApp(config);
  const database= firebase.database();
  database.ref().set({
      name: 'Raj Kumar',
      age: 26,
      isSingle: false,
      location: {
          city: 'Philadalphia',
          country: 'United States'
      }
  });

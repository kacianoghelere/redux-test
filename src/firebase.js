import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBiMepvCzgV_sd25G8_OkYw6USkWZs427s',
  authDomain: 'redux-test-e45d6.firebaseapp.com',
  databaseURL: 'https://redux-test-e45d6.firebaseio.com',
  projectId: 'redux-test-e45d6',
  storageBucket: '',
  messagingSenderId: '648504976828'
};

firebase.initializeApp(config);

export const database = firebase.database().ref('/users');
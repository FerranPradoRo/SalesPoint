import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDswiCquD0ugGAGwSVbYTDnuMVNGA9oQ5k',
  authDomain: 'sales-point-react.firebaseapp.com',
  projectId: 'sales-point-react',
  storageBucket: 'sales-point-react.appspot.com',
  messagingSenderId: '31189441092',
  appId: '1:31189441092:web:4e3660098da76c7c2b7a11',
};

firebase.initializeApp(firebaseConfig);

export default firebase;

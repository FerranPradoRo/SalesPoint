import React from 'react';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from '../firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

const Tickets = () => {
  firestore.collection('tickets').onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
      firestore
        .collection('tickets')
        .doc(doc.id)
        .collection('products')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
          });
        });
    });
  });

  // return <div>{data && data.map((ticket) => <p>Ticket</p>)}</div>;
  return <p>hrello</p>;
};

export default Tickets;

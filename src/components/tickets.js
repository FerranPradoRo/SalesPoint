import React from 'react';

import { useGetProducts } from '../hooks/useGetProducts';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from '../firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

const Tickets = () => {
  const ticketsRef = firestore.collection('tickets');
  const [ticketsData] = useCollectionData(ticketsRef, { idField: 'id' });
  const [tickets] = useGetProducts(ticketsData);
  return <div>{tickets && tickets.map((ticket) => <p>{ticket.id}</p>)}</div>;
};

export default Tickets;

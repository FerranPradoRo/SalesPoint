import { useState, useEffect } from 'react';
import firebase from '../firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

export const useGetProducts = (ticketsData) => {
  const [tickets, setTickets] = useState();
  let newTickets = [];

  const getData = () => {
    if (ticketsData) {
      ticketsData.forEach((ticket) => {
        let products = [];
        // let tickets = [];
        firestore
          .collection('tickets')
          .doc(ticket.id)
          .collection('products')
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((product) => {
              products = [...products, product.data()];
            });
            let newTicket = { ...ticket, products };
            newTickets = [...newTickets, newTicket];
            setTickets(newTickets);
          });
      });
    }
  };

  useEffect(() => {
    getData();
  }, [ticketsData]);

  return [tickets];
};

import { useState } from 'react';
import firebase from '../firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

export const useCreateTicket = (ticket, cleanSelectedProducts) => {
  const createdAt = firebase.firestore.FieldValue.serverTimestamp();
  const ticketsRef = firestore.collection('tickets');
  const [loading, setLoading] = useState(false);

  const createTicket = async () => {
    setLoading(true);
    let ticketId = '';
    await ticketsRef.add({
      createdAt: createdAt,
    });
    await ticketsRef
      .orderBy('createdAt', 'desc')
      .limit(1)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          ticketId = doc.id;
        });
      });
    ticket.map((product) => {
      firestore.collection('tickets').doc(ticketId).collection('products').add({
        id: product.id,
        idTicketProduct: product.idTicketProduct,
        name: product.name,
        price: product.price,
        productQuantity: product.productQuantity,
        amount: product.amount,
      });
      cleanSelectedProducts();
      setLoading(false);
    });
  };

  return [createTicket, loading];

  // useEffect(() => {
  //   createTicket();
  // }, [ticket]);
};

const order = {};

/*if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}*/

if (!order.customer?.address?.city) {  //se non esiste customer o non esiste address in customer o non esiste city in address, allora console.log('City is required') 
  console.log('City is required');
}

/*order è vuoto, se provo ad accedere mi darà errore. Uso ?. per evitare che il mio cosdice generi un errore.*/


/*ESEMPIO PER ME:

const order = {
  customer : {
    name: "chiara",
    address: {
      city:"palermo",
    }
  }
};

if (!order.customer?.address?.city) {  
  console.log('City is required');
} else {
  console.log(order.customer.address.city)
} */


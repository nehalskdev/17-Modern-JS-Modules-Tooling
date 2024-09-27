// Importing module
// import { addToCart, totalPrice as price, qt } from './shoppingCard.js';

// addToCart('bread', 5);
// console.log(price, qt);

console.log('importing module');

// import * as shopingCart from './shoppingCard.js';
// shopingCart.addToCart('bread', 5);

import add, { cart } from './shoppingCard.js';
add('pizza', 2);
add('apple', 4);
add('bread', 5);

console.log(cart);

const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
// Importing module
// import { addToCart, totalPrice as price, qt } from './shoppingCard.js';

// addToCart('bread', 5);
// console.log(price, qt);

// console.log('importing module');

// // import * as shopingCart from './shoppingCard.js';
// // shopingCart.addToCart('bread', 5);

// import add, { addToCart, cart } from './shoppingCard.js';
// add('pizza', 2);
// add('apple', 4);
// add('bread', 5);

// console.log(cart);

// // console.log('start fetching');
// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await res.json();
// // console.log(data);
// // console.log('something');

// const getLastPost = async function () {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     console.log(data);
//     return { title: data.at(-1).title, text: data.at(-1).body };
// };
// const lastPost = getLastPost();
// console.log(lastPost);

// not very clean
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// const shoppingCart2 = (function () {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23;

//     const addToCart = function (product, quantity) {
//       cart.push({ product, quantity });
//       console.log(`${quantity} ${product} added to cart`);
//     };

//     const orderStock = function (product, quantity) {
//       console.log(`${quantity} ${product} ordered from supplier`);
//     };

//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantity,
//     };
// })();

// shoppingCart2.addToCart('apple', 4);
// shoppingCart2.addToCart('pizza', 2);

// common js module

// // export
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//         `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
//     );
// };

// // import

// const

// command line


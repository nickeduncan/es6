// const addToCart = (item, number) => {
//   return Number, isFinite(number);
// }
//
// console.log(addToCart('shirt', 5));

// const addToCart = (item, number) => {
//   return Number, isFinite(number);
// }
//
// console.log(addToCart('shirt', Infinity));

// const addToCart = (item, number) => {
//   return Number, isFinite(number);
// }
//
// console.log(addToCart('shirt', Math.pow(2, 54)));

const addToCart = (item, number) => {
  return Number.isSafeInteger(number);
}

console.log(addToCart('shirt', Math.pow(2, 54)));

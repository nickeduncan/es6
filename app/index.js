// let call = () => {
//   let secret = 'ES6 rocks!';
//   let reveal = () => {
//     console.log(secret);
//   }
//   reveal();
// }
//
// call();

let call = () => {
  let secret = 'ES6 rocks!';
  let reveal = () => {
    console.log(secret);
  }
  return reveal;
}

let unveil = call();
unveil();

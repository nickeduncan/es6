// let p = new Promise((resolve, reject) => {
//   resolve('Resolved promise data');
// })
//
// p.then(response => console.log(response));

// let p = new Promise((resolve, reject) => {
//   reject('Rejected promise data');
// })
//
// p.then(response => console.log(response))
//   .catch(error => console.log(error));

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Resolved promise data'), 3000);
// })
//
// p.then(response => console.log(response))
//   .catch(error => console.log(error));

let p = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Resolved promise data'), 3000);
})

p.then(response => console.log(response))
  .catch(error => console.log(error));

console.log('after promise consumption');

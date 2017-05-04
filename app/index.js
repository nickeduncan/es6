// function* letterMaker() {
//   yield 'a';
//   yield 'b';
//   yield 'c';
// }
//
// let letterGen = letterMaker();
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);

function* countMaker() {
  let count = 0;
  // while (count < 3) {
  while (count < 4) {
    yield count += 1;
  }
}

let countGen = countMaker();
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);
console.log(countGen.next().value);

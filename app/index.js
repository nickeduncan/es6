// let a = new Set();
// a.add(5);
// a.add(43);
// a.add("Woohoo");
// a.add({x: 50, y: 200});
// // console.log(a);
//
// // console.log(a.size);
//
// console.log(a.has(7));

// let numbers = [5, 7, 8, 13, 17];
// let numSet = new Set(numbers);
// // console.log(numSet);
//
// for (let element of numSet.values()) {
//   console.log(element);
// }

let chars = 'asdklfjlkasjdflkjasdlkfjdlkasdflkjweoe'
let chars_arr = chars.split("");
let chars_set = new Set(chars_arr);
console.log(chars_set);

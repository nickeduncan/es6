// let a = Math.pow(2, 5);
// console.log(a);

// let a = 2**5;
// console.log(a);

// let b = "wonderful".includes("wonder");
// console.log(b);
// let b = "wonderful".includes("butter");
// console.log(b);

// let b = [2, 3, 4, 5, 6].includes(7);
// console.log(b);



// let obj = {a: 'one', b: 'two', c: 'three'};
// let keys = Object.keys(obj);
// console.log(keys);

// let obj = {a: 'one', b: 'two', c: 'three'};
// let values = Object.values(obj);
// console.log(values);

let obj = {a: 'one', b: 'two', c: 'three'};
let entries = Object.entries(obj);
// console.log(entries);

for (let entry of entries) {
  console.log(`key: ${entry[0]}, value: ${entry[1]}`);
}

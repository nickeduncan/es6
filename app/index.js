import Animal from './Animal.js';

// class Animal {
//   constructor(name, height) {
//     this.name = name;
//     this.height = height;
//   }
//
//   hello() {
//     console.log(`Hi! I'm ${this.name} from the Animal kingdom`);
//   }
// }

// let king = new Animal("Mufasa", 4.5);
// // console.log(king);
// king.hello();

class Lion extends Animal {
  constructor(name, height, color) {
    super(name, height);
    this.color = color;
  }

  hello() {
    console.log(`Hi! I'm ${this.name} from Pride Rock!`);
  }
}

let son = new Lion("Simba", 2, "golden");
// console.log(son);
son.hello();

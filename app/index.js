function Wizard(name, house, pet) {
  this.name = name;
  this.house = house;
  this.pet = pet;

  this.greet = () => `I'm ${this.name} from ${this.house}`;
}

Wizard.prototype.pet_name;

// Wizard.prototype.info = () => {
//   return `I have a ${this.pet} named ${this.pet_name}`;
// }

// Need function keyword to access prototype's "this"
Wizard.prototype.info = function() {
  return `I have a ${this.pet} named ${this.pet_name}`;
}

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
harry.pet_name = "Hedwig";
console.log(harry);
// console.log(harry.greet());
console.log(harry.info());

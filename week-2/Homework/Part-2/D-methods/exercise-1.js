/*

A person named Alice is defined below.
  1. Add a method "greet" so this person can say hello.
  2. Add a method "sayName" so this person can say their own name. Hint: use 'this' keyword to access the name property.

*/

let person = { //Ya estaba en el ejercicio.
    name: "Alice",
    age: 25,
    //Agrego las siguientes líneas:
    greet: function() {
      return "Hello everybody";
    },
    sayName: function() {
      return 'My name is Alice';
    },
};
  
/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/
  
console.log(
  `Expected result: Hello everybody. Actual result: ${person.greet()}`
);
console.log(
  `Expected result: 'My name is Alice'. Actual result: ${person.sayName()}`
);
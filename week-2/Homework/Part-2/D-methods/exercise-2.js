/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: function (newAddress) { //Agrego palabra función
        this.currentAddress = newAddress; //Agrego this para hacer referencia al objeto actual.
    },
    celebrateBirthday: function() { //Agrego paréntesis después de la palabra función
        this.age = this.age + 1; //Se cambia el that por this para hacer referencia al objeto actual del método.
    },
};

person.changeAddress("Barcelona");
console.log(person.currentAddress);

person.celebrateBirthday();
console.log(person.age);
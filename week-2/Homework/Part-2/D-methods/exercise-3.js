/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: function (newAddress) { //Agrego palabra función 
        this.currentAddress = newAddress; // Agrego "this" al inicio
    },
    celebrateBirthday: function() { //Agrego paréntesis después de la palabra función
        this.age = this.age + 1; //Se cambia el that por this para hacer referencia al objeto actual del método.
    }, //Agrego coma aunque no afecta el resultado
};


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

person.changeAddress("Edinburgh");
console.log(`Expected result: Edinburgh. Actual result: ${person.currentAddress}`);

person.celebrateBirthday();
console.log(`Expected result: 26. Actual result: ${person.age}`);
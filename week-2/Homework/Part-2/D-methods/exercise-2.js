/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: function (newAddress) { //Agrego palabra función
        currentAddress = newAddress;
    },
    celebrateBirthday: function() { //Agrego paréntesis después de la palabra función
        this.age = this.age + 1; //Se cambia el that por this para hacer referencia al objeto actual del método.
    },
};

//Imprime en consola el valor de la función "celebrateBirthday":
person.celebrateBirthday();
console.log(person.age);

//Imprime el valor de la función "changeAddress":
console.log(person.changeAddress());

/* Debo revisar porque me está imprimiendo lo siguiente:
        26
        undefined
*/
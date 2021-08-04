/*
    The following code contains syntax errors - try and fix them!

    Once you fix them, run this file, it should output the correct values!
*/

var phone = {
    brand:'iPhone', //Cierre de comilla
    model: 'iPhone X', //Dos puntos y la coma al final
    launchYear: 2017,
    isUnlocked: true, //Quitar espacio en la declaración del nombre de la propiedad y la coma al final
}; //Cierre de llave

var phoneBrand = phone.brand; //Una letra "b" está demás.
var phoneLaunchYear = phone['launchYear']; //Comillas en el nombre de la propiedad

// DO NOT MODIFY BELOW THIS LINE

console.log(phoneBrand);
console.log(phoneLaunchYear);

// it should output:
// iPhone
// 2017
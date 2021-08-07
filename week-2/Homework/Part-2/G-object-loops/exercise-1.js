// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = { //Ya se encontraba estas líneas.
    tom: 20,
    george: 17,
    abdul: 19,
};

//Agrego lo siguiente:
for(const nameGrade in studentGrades){
  if (studentGrades[nameGrade] > 18){
    console.log(`${nameGrade.toUpperCase()} - ${studentGrades[nameGrade]}`);
  }
};

/*Agrego lo siguiente:
let values = Object.values(studentGrades); //Declaramos los valores de las propiedades
let propiedades = Object.keys(studentGrades); //Declaramos las propiedades
let calificaciones = values.filter(value => value > 18);

console.log(calificaciones);
REVISAR YA QUE ME DA COMO RESULTADO:
[ 20, 19 ]
*/

  // Prints
  // TOM - 20
  // ABDUL - 19
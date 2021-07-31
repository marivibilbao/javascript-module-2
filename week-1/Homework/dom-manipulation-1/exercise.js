/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

//Task 1.1: 
let shouldAllP = document.querySelectorAll("p");
console.log("La longitud del párrago es igual a 6", shouldAllP.length === 6);
//Resultado: true

//Task 1.2:
let firstDiv = document.querySelector("div.site-header");
console.log(firstDiv);

//Task 1.3:
let elementJumbo = document.querySelector("#jumbotron-text");
console.log(elementJumbo);

//Task 1.4:
let primaryP = document.querySelectorAll(".primary-content p"); //primary-content es el elemento padre y p el hijo
console.log(primaryP.length === 3);
//Resultado: false

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let alertButton = document.querySelector("#alertBtn"); //Declaro variable 
alertButton.addEventListener("click", alertSomething);

function alertSomething(){
    alert("Thanks for visiting Bikes for Refugees!"); //Mensaje de la alerta cuando se de click
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

let buttonClic = document.querySelector("#bgrChangeBtn"); //Declaro variable del botón que se debe dar click

buttonClic.addEventListener("click", function () { //Agrego función del evento 
    document.body.style.backgroundColor = "#E0B7F7"; //Defino el color
});

/* CAMBIA DE COLOR EL BOTÓN CUANDO HAGO CLICK
let colorButton = document.querySelector("#bgrChangeBtn"); //Declaro variable del botón.
colorButton.addEventListener("click", changeColor); // Evento al hacer click

function changeColor(){ //Agrego función para cambiar color
    colorButton.style.backgroundColor = "purple";
}
/*

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

const buttonText = document.querySelector('#addTextBtn'); //Declaro variable del botón donde quiero ejecutar el evento

buttonText.addEventListener("click", function(){ //Función del evento
    let elementoNewP = document.createElement('p'); //Creo el elemento párrafo (p)
    elementoNewP.innerHTML = "Por fin puedo agregar un párrafo."; //Agrego texto al elemento p.
    document.getElementById("mainArticles").appendChild(elementoNewP); 
})

/*Lo estaba haciendo de la siguiente manera, pero me daba error:
const buttonText = document.querySelector('#addTextBtn'); //Declaro variable del botón donde quiero ejecutar el evento

buttonText.addEventListener("click", function (){ //Función del evento

    const elementoNewP = document.createElement("p"); //Creo elemento "p"
    const textoNewP = document.createTextNode("Agrega cualquier comentario o si necesitas contactar con nosotros puedes hacerlo por este medio."); //Creo texto 
    elementoNewP.appendChild(textoNewP); //Agrego texto a p
    
    document.getElementById("div.mainArticles").appendChild(elementoNewP);

    //const learnMore = document.querySelector("article-lead"); //Agrego variable del div que esta en el HTML
    
    //allContent = learnMore.getElementsByTagName('p')[0]; //Obtener el primer párrafo 
    
    //learnMore.insertBefore(elementoNewP,allContent); //Inserto el nuevo párrafo antes del primer párrafo
});
*/

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const buttonBigLetter = document.querySelector("#largerLinksBtn"); //Declaro el botón

buttonBigLetter.addEventListener ("click", function (){ //Agrego función con evento si dan click
    const linksMenu = Array.from(document.querySelectorAll('a')); // Convertir una NodeList en una matriz, puede usar Array.from
    /*Seleccionar enlaces con jQuery es muy sencillo mediante los selectores de atributo. 
    Por ejemplo, podemos seleccionar todos los enlaces que contengan # en la URL: var links = $( 'a[href*="#"]' );*/
    
    linksMenu.forEach ((linkElement) => { //Acceso a los elementos del array utilizando forEach
        linkElement.style.fontSize = 25;
    });
})

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
//-------------------------------------------
//No lo tengo listo todavia
const buttonAdd = document.querySelector('#addArticleBtn'); //Declaro variable del botón donde quiero ejecutar el evento
let textos = [ ];
function insertarTextos (texto) {
    textos.push(texto);
}

buttonAdd.addEventListener("click", () => { //Función del evento
    let elementoNewP = document.createElement('p'); //Creo el elemento párrafo (p)
    elementoNewP.innerHTML = "Por fin puedo agregar un párrafo."; //Agrego texto al elemento p.
    document.getElementById("mainArticles").appendChild(elementoNewP); 
})

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed 
with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

//No esta terminado.
let diferentColores = ["#FF33D1", "#7BBBE2", "#CEEA8F", "#E7832B", "#D66F8D"]; //Declaro Array

buttonClic.addEventListener("click", function () { //Agrego función del evento 
    diferentColores.forEach ((colorElement) => { //Acceso a los elementos del array utilizando forEach
        colorElement.body.style.backgroundColor = diferentColores;
    });
});
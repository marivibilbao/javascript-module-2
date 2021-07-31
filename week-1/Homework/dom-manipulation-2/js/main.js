/*When clicking blue it should change:

    - Jumbotron background color to #588fbd
    - Donate a bike button background color to #ffa500
    - Volunteer button background color to black and text color to white
*/

const buttonBlue = document.querySelector("#blueBtn"); //Declaro variable del botón blue
const buttonDonate = document.querySelector(".btn-lrg"); //Declaro botón "Donate a bike today"
const buttonVolunteer = document.querySelector(".btn-secondary"); //Declaro botón "Volunteer"
const jumboColor = document.querySelector(".jumbotron"); //Declaro jumboColor

buttonBlue.addEventListener('click', (event) => { //Agrego función del evento click
    event.preventDefault();
    jumboColor.style.backgroundColor = '#588fbd'; //Cambio fondo de jumbotron
    buttonDonate.style.backgroundColor = '#FFA500'; 
    buttonVolunteer.style.backgroundColor = "black";
    buttonVolunteer.style.color = "white"; //Cambia color de la letra botoón Volunteer
});

/*
When clicking orange it should change:

    - Jumbotron background color to #f0ad4e
    - Donate a bike button background color to #5751fd
    - Volunteer button background color to #31b0d5 and text color to white
*/

const buttonOrange = document.querySelector("#orangeBtn"); //Variable botón Orange

buttonOrange.addEventListener("click", (event) => { //Agrego función del evento click
    event.preventDefault();
    jumboColor.style.backgroundColor = '#f0ad4e'; //Cambio fondo de jumbotron
    buttonDonate.style.backgroundColor = "#5751fd";
    buttonVolunteer.style.backgroundColor = "#31b0d5";
    buttonVolunteer.style.color = "white";
});

/*
When clicking green it should change:

    - Jumbotron background color to #87ca8a
    - Donate a bike button background color to black
    - Volunteer button background color to #8c9c08
*/

let buttonGreen = document.querySelector("#greenBtn"); //Declaro botón verde

buttonGreen.addEventListener("click", (event) => { //Agrego función del evento click
    event.preventDefault();
    jumboColor.style.backgroundColor = '#87ca8a'; //Cambio fondo de jumbotron
    buttonDonate.style.backgroundColor = "black";
    buttonVolunteer.style.backgroundColor = "#8c9c08";
});

/*
Part 2
Just below the buttons, there's a form called Register with us.
Continue working in ./js/main.js to add the following functionality:
When the submit button is pressed, it should check that all the form fields are valid:
The Your name, Email and Describe yourself fields need to be non-empty (Hint: their value length has to be greater than zero)
For the Email field also check if it contains the @ character
For all the fields that invalid, it should make their background color red. IF all the fields are valid, when you click Submit it should:
Display an alert to thank you for filling out the form
Blank out (make empty) all the text fields
Important hint: In your function that handles clicks on the Submit button you will need to call event.preventDefault() to stop the browser from refreshing the page. To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault
*/

const mail = document.querySelector("#exampleInputEmail1");
const name = document.querySelector("#example-text-input");
const area = document.querySelector("#exampleTextarea");
const submit = document.querySelector("form button");

function email() {
    if (mail.value.length > 0 && mail.value.includes("@")){
        mail.style.border = "";
    } else {
        mail.style.border = "2px solid red";
    }
}

function ename() {
    if (name.value.length > 0 ){
        name.style.border = "";
    } else {
        name.style.border = "2px solid red";
    }
}

function earea() {
    if (area.value.length > 0 ){
        area.style.border = "";
    } else {
        area.style.border = "2px solid red";
    }
}

submit.addEventListener("click", (event)=>{
    event.preventDefault();
    if(mail.value.length > 0 && name.value.length > 0 && area.value.length > 0 && mail.value.includes("@")){
        mail.value = "";
        name.value = "";
        area.value = "";
        mail.style.border = "1px solid rgba(0,0,0,.15)";
        name.style.border = "1px solid rgba(0,0,0,.15)";
        area.style.border = "1px solid rgba(0,0,0,.15)";
    }else{
        mail.addEventListener("focusout", email());
        name.addEventListener("focusout", ename());
        area.addEventListener("focusout", earea());
        alert("Debes rellenar todo el formulario");
    }
})
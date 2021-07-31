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
    buttonVolunteer.style.color = "white";
});

/*
When clicking orange it should change:

    - Jumbotron background color to #f0ad4e
    - Donate a bike button background color to #5751fd
    - Volunteer button background color to #31b0d5 and text color to white
*/

let buttonOrange = document.querySelector("#orangeBtn");
buttonOrange.addEventListener("click", function () { //Agrego función del evento click
    document.body.style.backgroundColor = "#f0ad4e"; //Al dar click el fondo cambia de color
});

/*
When clicking green it should change:

    - Jumbotron background color to #87ca8a
    - Donate a bike button background color to black
    - Volunteer button background color to #8c9c08
*/

let buttonGreen = document.querySelector("#greenBtn");
buttonGreen.addEventListener("click", function () {
    document.jumbotron.style.backgroundColor = "#87ca8a";
});
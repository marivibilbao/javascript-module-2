/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

//Task 1 ---*** setTimeout()
setTimeout(function backgroundFirst() {
    document.body.style.backgroundColor = "#E8B3F3"; },5000); //Cambiamos backgroundColor, después de 5 segundos

//Task 2 ---*** setInterval()
//Cada 5 segundos cambiar color de fondo
let i = 0; //Declaro variable
function changeColorsBackground() {
    let colors = ["#829DF2", "#5BD48C", "#FFC300", "#C0C0C0", "#D52444", "#C634F8"]; //Arregle de colores
    document.body.style.backgroundColor = colors[i]; 
    i = (i + 1) % colors.length;
};

setInterval(changeColorsBackground, 5000);
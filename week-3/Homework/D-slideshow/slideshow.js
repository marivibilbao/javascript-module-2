// Write your code here
//Declaración de varibles de imágenes, por separado:
let dogImageOne = "./images/image1.jpg";
let dogImageTwo = "./images/image2.jpg";
let dogImageThree = "./images/image3.jpg";
let dogImageFour = "./images/image4.jpg";
let dogImageFive = "./images/image5.jpg";

//Array de imágenes
let dogsImages = [dogImageOne, dogImageTwo, dogImageThree, dogImageFour, dogImageFive];

const img = document.querySelector("#imagen");

const autoBackButton = document.getElementById("autoBack");
const backButton = document.getElementById("back");
const stopButton = document.getElementById("stop");
const forwardButton = document.querySelector("#forward");
const autoForwardButton = document.querySelector("#autoForward");

let posicionActual = 0;
let intervalo;
//img.setAttribute("src","./images/image1.jpg");

/*
Función para actualizar la imagen dependiendo de la posición actual
function renderizarImagen(){
    imagen.style.backgroundImage = `url(${dogsImages[posicionActual]})`;
};
*/

//Función para siguiente foto
function forward(){
    if(posicionActual > dogsImages.length - 1){
        posicionActual = 0;
    }else {
        posicionActual ++;
    };
    img.src = dogsImages[posicionActual];
};

//Función para retroceder foto
function back(){
    if(posicionActual <= 0){
        posicionActual = dogsImages.length -1;
    }else{
        posicionActual --;
    };
    img.src = dogsImages[posicionActual];
};

//Agrego evento para botón forward
forwardButton.addEventListener("click",forward);

//Agrego evento para botón back
backButton.addEventListener("click",back);


//Agrego evento para botón stop
stopButton.addEventListener("click",()=>{
    clearInterval(intervalo)
});

//Agrego evento para botón auto-forward
autoForwardButton.addEventListener("click",()=>{
    clearInterval(intervalo)
    intervalo = setInterval(forward,2000)
});

//Agrego evento para botón auto-back
aBackBtn.addEventListener("click",()=>{
    clearInterval(interval)
    intervalo = setInterval(back,2000)
});


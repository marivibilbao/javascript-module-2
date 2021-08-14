// Write your code here
//Declaración de varibles de imágenes, por separado:

let dogImageOne = "./images/image1.jpg";
let dogImageTwo = "./images/image2.jpg";
let dogImageThree = "./images/image3.jpg";
let dogImageFour = "./images/image4.jpg";
let dogImageFive = "./images/image5.jpg";

//Array de imágenes
let dogsImages = [dogImageOne, dogImageTwo, dogImageThree, dogImageFour, dogImageFive];

const imgSelector = document.querySelector("img");

const autoBackButton = document.getElementById("autoBack");
const backButton = document.getElementById("back");
const stopButton = document.getElementById("stop");
const forwardButton = document.querySelector("#forward");
const autoForwardButton = document.querySelector("#autoForward");

let imageIndex = 0;
let intervalo;
//img.setAttribute("src","./images/image1.jpg");
//img.src = "./images/image1.jpg";
//img.src = dogsImages[index];

//Función para actualizar la imagen dependiendo de la posición actual
function showImagen(index){
    imgSelector.src = dogsImages[index];
    showPicture(imageIndex);
};

//Función para siguiente foto
function forward(){
    if(imageIndex >= dogsImages.length - 1){
        imageIndex = 0;
    }else {
        imageIndex ++;
    };
    showImagen(imageIndex);
};

//Función para retroceder foto
function back(){
    if(imageIndex <= 0){
        imageIndex = dogsImages.length -1;
    }else{
        imageIndex --;
    };
    showImagen(imageIndex);
};

//Agrego evento para botón forward
forwardButton.addEventListener("click",forward);

//Agrego evento para botón back
backButton.addEventListener("click",back);

//Agrego evento para botón stop
stopButton.addEventListener("click",()=>{
    clearInterval(intervalo)
    forwardButton.removeAttribute("disabled");
    backButton.removeAttribute('disabled');
    autoForwardButton.removeAttribute('disabled');
    autoBackButton.removeAttribute('disabled');
    stopButton.setAttribute('disabled');
});

//Agrego evento para botón auto-forward
autoForwardButton.addEventListener("click",()=>{
    clearInterval(intervalo)
    intervalo = setInterval(forward,1000)
});

//Agrego evento para botón auto-back
autoBackButton.addEventListener("click",()=>{
    //clearInterval(interval)
    intervalo = setInterval(back,1000)
});

showImagen(imageIndex);
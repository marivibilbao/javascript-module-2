//Agrego otra forma de hacer el ejercicio:
let counter = 0;

convertSecondsToMin = (num) => {
  let min = Math.trunc(num / 60);
  let sec = num - min * 60;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;
  return `${min}:${sec}`;
};

const writeTime = () => {
  let timeInMinutes = convertSecondsToMin(counter);
  const title = document.querySelector("#timeRemaining");
  title.innerHTML = "Time Remaining: " + timeInMinutes;
};

const reSetInterval = (interval) =>{
  if (counter < 0){
    playAlarm();
    clearInterval(interval);
    setTimeout(() => {
      pauseAlarm();
    }, 3000);
  };
};

function setAlarm(){
  const userInput = document.querySelector("#alarmSet");
  counter = +userInput.value;
  userInput.value = "";
  let interval = setInterval(() => {
    writeTime(counter);
    counter --;
    if (counter === 0){
      playAlarm();
      document.body.style.background = "#BF6BE7"; //Cambia de color el background
    };
    reSetInterval(interval);
  }, 1000);
};

const stopAlarm = () => {
  counter = 0;
};


//console.log(+userInput.value);
//Convertir un string que tiene un número adentro en número


/* Como yo lo hice pero tiene algunos detalles:
let interval;

function setAlarm() { //Creamos función 
  //Declaramos las variables
  let alarmSet = document.getElementById("alarmSet").value;
  let timeRemaining = document.getElementById("timeRemaining");
  let body = document.querySelector("body");

  //Método clearInterval () - Utilizado para detener el tiempo
  clearInterval(interval); 
  pauseAlarm(); //Llamamos función para pausa o desactiva audio de alarma

  // Método: setInterval () - Llama a una función o evalúa una expresión a intervalos específicos (en milisegundos).
  interval = setInterval(()=>{ 
    if(alarmSet===0){ //Si el reloj llega a 0
      timeRemaining.innerText = "Time Remaining: 00:0" + alarmSet;
      body.style.background = "#BF6BE7"; //Cambia de color el background
      playAlarm(); //Activa sonido
      clearInterval(interval); //Se aplica método para detener el tiempo.
    }else if(alarmSet > 10){
      alarmSet = 10;
      timeRemaining.innerText = "Time Remaining: 00:" + alarmSet;
      alarmSet --;
    }else if(alarmSet > 9){
      alarmSet = 9;
      timeRemaining.innerText = "Time Remaining: 00:0" + alarmSet;
      alarmSet --;
    }else{
      timeRemaining.innerText = "Time Remaining: 00:0" + alarmSet;
      alarmSet --;
    };
  },1000); //1seg después de colocar el número
};

*/

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    stopAlarm();
    pauseAlarm();
    //clearInterval(interval); //
    //timeRemaining.innerText = "Time Remaining: 00:00"; //
  });
};

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  //clearInterval(interval);
  //let time = timeRemaining.innerText;
  //time.split("").forEach((caracter,index) => {
  //  console.log(caracter,index);
  //});
  //timeRemaining.innerText = "Time Remaining: 00:00";
};

window.onload = setup;

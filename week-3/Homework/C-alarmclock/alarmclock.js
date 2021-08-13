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
    }else if(alarmSet>10){
      alarmSet = 10;
      timeRemaining.innerText = "Time Remaining: 00:0" + alarmSet;
      alarmSet --;
    }else{
      timeRemaining.innerText = "Time Remaining: 00:0" + alarmSet;
      alarmSet --;
    };
  },1000); //1seg después de colocar el número
};

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;

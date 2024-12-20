/*PRIMERA PARTE
1. Crear el html (h1, p, select, boton, 3p) con sus clases
2. JS: seleccionar los elementos del HTML para poder interactuar (select, boton y los 3p del final)
3. Escuchar los eventos sobre el botón click:
    - Recoger la información del select (piedra, papel o tijera)
    - Generar el numero aleatorio entre 1 y 9, con el que juega la computadora 
    - Crear el condicional para que se ejecute el juego:
        - Crear el condicional para saber qué le sale a la computadora 
        - Crear el condicional para ver quien gana el juego
SEGUNDA PARTE
1. Crear condicional:
    - si gana la computadora, sumar 1 en el h4 de computadora
    - si gana la jugadora, sumar 1 en el h4 jugadora
*/

"use strict";

const main = document.querySelector(".js-main");
const select = document.querySelector(".js-select");
const btn = document.querySelector(".js-btn");
const h3 = document.querySelector(".js-result");
const playerResult = document.querySelector(".js-jugadora");
const computResult = document.querySelector(".js-computadora");
const btnReload = document.querySelector(".js-reload")

let resultComput = "";
let scorePlayer = 0;
let scoreComput = 0;
let countClick = 0;

function playGame (gamePlayer) {
    playComputadora();
   
    if (gamePlayer === resultComput) {
        h3.innerHTML = "Empate";
    } else if (
        (gamePlayer === "piedra" && resultComput === "tijera") || 
        (gamePlayer === "papel" && resultComput === "piedra") ||
        (gamePlayer === "tijera" && resultComput === "papel")) {
            h3.innerHTML = "¡Has ganado!"
            scorePlayer++;
    } else {
        h3.innerHTML = "¡Has perdido!"
        scoreComput++;
    }
    playerResult.innerHTML = `Jugadora ${scorePlayer}`;
    computResult.innerHTML = `Computadora ${scoreComput}`;
}


function getRandomNumber (max) {
    return Math.ceil(Math.random()* max);
}

function playComputadora () {
    const numRandom = getRandomNumber(9);
    
    if (numRandom <= 3) {
        resultComput = "piedra"
    } else if (numRandom >= 7) {
        resultComput = "papel"
    } else {
        resultComput = "tijera"
    }
}

//función que nos dice quien gana cuando llegue a 10
function gameOver () {
    if (countClick >= 4) {
        if (scorePlayer > scoreComput) {
            h3.innerHTML = "¡Has ganado el juego!";
        } else if (scorePlayer < scoreComput) {
            h3.innerHTML = "¡Has perdido el juego!";
        }else {
            h3.innerHTML = "¡Has empatado con la computadora"!;
        }
        btn.classList.add("hidden");
        btnReload.classList.remove("hidden");
    }
    
}

function handleClickPlay (ev) {
    ev.preventDefault();
    countClick++; //para ir contando. También podriamos poner dentro de playGame
    const valueSelect = select.value;
    playGame (valueSelect);
    gameOver ();
}

function handleReset (ev) {
    ev.preventDefault();
    btn.classList.remove("hidden");
    btnReload.classList.add("hidden");
    scorePlayer = 0;
    scoreComput = 0;
    countClick = 0;
    h3.innerHTML = "¡Vamos a Jugar!"
}


btn.addEventListener("click", handleClickPlay);
btnReload.addEventListener("click", handleReset)
/*
1. Crear el html (h1, p, select, boton, 3p) con sus clases
2. JS: seleccionar los elementos del HTML para poder interactuar (select, boton y los 3p del final)
3. Escuchar los eventos sobre el botón click:
    - Recoger la información del select (piedra, papel o tijera)
    - Generar el numero aleatorio entre 1 y 9, con el que juega la computadora 
    - Crear el condicional para que se ejecute el juego:
        - Crear el condicional para saber qué le sale a la computadora 
        - Crear el condicional para ver quien gana el juego
*/

"use strict";

const main = document.querySelector(".js-main");
const select = document.querySelector(".js-select");
const btn = document.querySelector(".js-btn");
const h3 = document.querySelector(".js-result");

let resultComput

function playGame (gamePlayer) {
    //ejecutar playComputador y hacer comparacion con gamePlayer
    // const numComputadora= 
    playComputadora();
    console.log("prova")
    if (gamePlayer === "piedra" && resultComput === "piedra-comp" || 
        gamePlayer === "papel" && resultComput === "papel-comp" ||
        gamePlayer === "tijera" && resultComput === "tijera-comp" 
    ) {
        h3.innerHTML = "Empate";
        // console.log("empate")
    } else if (gamePlayer === "piedra" && resultComput === "tijera-comp" || 
        gamePlayer === "papel" && resultComput === "piedra-comp" ||
        gamePlayer === "tijera" && resultComput === "papel-comp") {
            h3.innerHTML = "¡Has ganado!"
        } else if (gamePlayer === "piedra" && resultComput === "papel-comp" || 
            gamePlayer === "papel" && resultComput === "tijeras-comp" ||
            gamePlayer === "tijera" && resultComput === "piedra-comp") {
                h3.innerHTML = "¡Has perdido!"
            }
}


function getRandomNumber (max) {
    return Math.ceil(Math.random()* max);
}

function playComputadora () {
    const numRandom = getRandomNumber(9);
    
    if (numRandom <= 3) {
        resultComput = "piedra-comp"
    } else if (numRandom >= 7) {
        resultComput = "papel-comp"
    } else {
        resultComput = "tijera-comp"
    }
}

function handleClickPlay (ev) {
    ev.preventDefault();
    const valueSelect = select.value;
    playGame (valueSelect);
}


btn.addEventListener("click", handleClickPlay)
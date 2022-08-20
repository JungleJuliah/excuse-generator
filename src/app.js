/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let arrwho = [
    "mi novia",
    "mi mama",
    "la casa",
    "el carro",
    "la luna",
    "mi perro"
  ];
  let arrwha = [
    "se intoxicó",
    "se cayó por las escaleras",
    "le dió diarrea",
    "esta retrograda",
    "prendió en fuego",
    "no quiere prender"
  ];
  let arrso = [
    "la tuve que cuidar y no pude escribir nada",
    "tuve que encargarme de eso y no tenía mente para ponerme a hacerla",
    "no me dió chance de hacerla bien",
    "las vibras no estaban como para ponerme a hacer tarea",
    "tuve que salir corriendo a resolver eso",
    "me tocó buscar ayuda y resolver"
  ];
  let arrwhe = [
    "esta mañana",
    "anoche",
    "toda la semana",
    "en todo el día",
    "este mes",
    "ahorita"
  ];

  const quien = arrwho[Math.floor(Math.random() * 6)];
  const que = arrwha[Math.floor(Math.random() * 6)];
  const tonces = arrso[Math.floor(Math.random() * 6)];
  const docuan = arrwhe[Math.floor(Math.random() * 6)];

  const excu = quien + " " + que + " " + tonces + " " + docuan;

  console.log("No me lo vas a creer pero...", excu);
  console.log("Hello Rigo from the console!");
  let excusa = document.querySelector("#excu");
  excusa.textContent = excu;
};

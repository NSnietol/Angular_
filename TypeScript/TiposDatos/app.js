"use strict";
// La idea de TypeScript es ayudarte a generar la menor cantidad de errores
var nombre;
nombre = "Nilson";
var number;
var booleano;
var hoy = new Date();
console.log(hoy);
var cualquiera;
cualquiera = nombre;
console.log(cualquiera);
// Puedo colocar var o let
var universidad = {
    nombre: "UdeC",
    cuidad: "Cartagena",
    pais: "Colombia",
};
console.log(universidad);
//Template Literal
var apellido = "Nieto";
//Dentro del ${ } puede ir código de java script
var texto = "Hola, " + nombre + " " + apellido;
console.log(texto);

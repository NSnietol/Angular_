// La idea de TypeScript es ayudarte a generar la menor cantidad de errores
let nombre:String;
nombre="Nilson"
let number:number;
let booleano:boolean;

let hoy:Date=new Date();
console.log(hoy)

let cualquiera:any;

cualquiera=nombre
console.log(cualquiera)

// Puedo colocar var o let
var universidad={
  nombre:"UdeC",
  cuidad:"Cartagena",
  pais:"Colombia",

}
console.log(universidad)

//Template Literal
var apellido="Nieto"
//Dentro del ${ } puede ir código de java script
var texto:string=`Hola, ${nombre} ${apellido}`;
console.log(texto)

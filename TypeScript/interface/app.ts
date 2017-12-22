// Usar interface prohibe la existencia de más atributos en un objeto
interface Xmen{
  nombre:string,
  poder:string
}

function enviarMision(xmen : Xmen){

  console.log("Enviando a "+xmen.nombre+" a una misión")

}

//lo que dice en el titulo
let wolverine:Xmen={
  nombre:"Logan",
  poder:"Garras de adamantiun"
  //,edad=12

}

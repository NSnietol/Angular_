
//nombre:string es de tipo obligatorio  debe ser obligatorio el primero
//fecha:string="hoy" un parametro por omisión
//momento?:string es opcional

function activarServidor(nombre:string, fecha:string="hoy",momento?:string){
  let mensaje:string;
  if(!momento){
    mensaje=`Hola, ${nombre}. ${fecha} se activará el servidor `;
    alert(mensaje)

  }else{
    mensaje=`Hola, ${nombre}. ${fecha} se activará el servidor a las ${momento} `;
    alert(mensaje)

  }

}

activarServidor("Nilson","16/09/2017"," 7 P.M");

var valor = function(a:string){
  return a;
}

// recibe a & devuelve a, y es denominada funcoón de flecha
let valorFlecha=(a:string)=>a;

alert("Función normal "+valor("NS"));
alert("Función flecha "+valorFlecha("NS"));


valor= function(a:number,b:number){
  return a+b
}

// Si la función flecha va a tener más lineas de código se usa =>{código}
let valorFlecha2 =(a:number,b:number)=>a+b;

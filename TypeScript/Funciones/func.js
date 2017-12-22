//nombre:string es de tipo obligatorio  debe ser obligatorio el primero
//fecha:string="hoy" un parametro por omisión
//momento?:string es opcional
/*function activarServidor(nombre:string, fecha:string="hoy",momento?:string){
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
*/
var valor = function (a) {
    return a;
};
// recibe a & devuelve a, y es denominada funcoón de flecha
var valorFlecha = function (a) { return a; };
alert("Función normal " + valor("NS"));
alert("Función flecha " + valor1("NS"));
valor = function (a, b) {
    return a + b;
};
// Si la función flecha va a tener más lineas de código se usa =>{código}
var valorFlecha2 = function (a, b) { return a + b; };

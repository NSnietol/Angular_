
console.log("Primer paso")
let prom1 = new Promise(function(resolve,reject){

setTimeout(function(){
  console.log("Promesa terminada")
// Todo bien
  resolve()
//Se explotó
  //reject()
},1300)

})

console.log("Segundo paso")
prom1.then(function(){
  console.log("Se ejecutó correctamente la promesa")

},function(){
  console.error("Hubo un error")

})

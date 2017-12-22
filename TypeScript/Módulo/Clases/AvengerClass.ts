// Para que se puede utilizar en carpeta
export class Avenger{
  nombre:string;
  nombreReal:string;
  peleasGanadas:number;
  habilidad:string;

  constructor(nombre:string,nombreReal:string="Desconocido",peleasGanadas:number=0,habilidad:string){
    this.nombre=nombre;
    this.nombreReal=nombreReal;
    this.peleasGanadas=peleasGanadas;
    this.habilidad=habilidad;

  }

}

let object = new Avenger("IRON MAN","TONY Stark",12,"Conocimiento ");

console.log(object)

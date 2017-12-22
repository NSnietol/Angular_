import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})



export class BodyComponent {

mostar:boolean=false;
  frase:any={
    mensaje:"Nuestras virtudes y nuestros defectos son inseparables, como la fuerza y la materia. Cuando se separan, el Hombre no existe",
    autor:"Nicola Tesla"

  }
  personajes:any=["SpiderMan","SuperMan","BatMan","Flash","Linterna verde"];
}

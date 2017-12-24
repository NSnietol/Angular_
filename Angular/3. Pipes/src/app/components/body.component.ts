import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})



export class BodyComponent {
  estado:Boolean=true;
  name:String="Nilson";
  lastname:String="Nieto";
  arreglo= [1,2,3,4,5,6,7,8,9];
  PI=Math.PI;
  valor:number=0.24566;

  salario:number=785600;

  heroe={

    nombre:"Logan",
    alias:"Wolverine",
    edad:67,
    direccion:{
      pais:"EEUU",
      cuidad: "New York",
      calle:19

    }


  };

  hoy = new Date();
  

}

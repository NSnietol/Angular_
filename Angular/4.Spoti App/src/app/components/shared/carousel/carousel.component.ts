import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  // Lo único que se tiene que agregar a este componente es la lista de imagens que contengan al menos el formato
  // Estipulado en la última línea
  
  slices:Slice[]=[
  
  {

    url:"assets/img/slide-1.jpg",
    nombre:"ed-sheeran",
    vinculo:""
  },
  {
    
        url:"assets/img/slide-2.jpg",
        nombre:"metallica",
        vinculo:""
  },
  {
    
        url:"assets/img/slide-3.jpg",
        nombre:"heroes",
        vinculo:""
  }

];

  constructor() { 


  }

  ngOnInit() {
  }

  getActiveItem():Slice{

    if(this.slices.length>0){
      return this.slices[0];
    }
 
  }

  getItems(){
    let lista:Slice[];
    if(this.slices.length>1){
      return this.slices.slice(1,);
         
       }

    }
   

  

}

 export interface Slice{
    url:string;
    nombre:string;
    vinculo:string;
 }

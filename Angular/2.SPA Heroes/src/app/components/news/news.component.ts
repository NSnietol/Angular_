import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  //Uso un vector de Booleanos mientras tanto, pero hay que crear un servicio de noticias
  mostrar:boolean[]=[false,false,false,false,false];
  constructor() { }

  ngOnInit() {
  }


  //Cambia el estado del botón seleccionado y cierra los demás
  public desactivar(int:number){

    
  }


}

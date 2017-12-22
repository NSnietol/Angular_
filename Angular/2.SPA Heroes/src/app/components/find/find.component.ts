import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HereosService,Heroe} from "../../services/heroes.service"



@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent  {


  heroes:Heroe[]=[];
  parametros:string;
  constructor(private activatedRoute:ActivatedRoute,
    private _hereos:HereosService,private router:Router     ) {


      this.activatedRoute.params.subscribe(params => {
        
        this.parametros= params['text'];
        this.heroes=this._hereos.buscarHeroe(params['text']);
          console.log(this.heroes);

    



     });


}
verHeroe(idx:number){
  this.router.navigate(['Heroe',idx])

}


}

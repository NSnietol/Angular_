import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HereosService} from "../../services/heroes.service"


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  heroe:any= {};

  constructor(private activatedRoute:ActivatedRoute,
              private _hereos:HereosService,private router:Router        ) {

    this.activatedRoute.params.subscribe(params => {

        this.heroe=this._hereos.getHeroe(params['id']);


    });
    
   }

  ngOnInit() {
  }

   
  regresar(){
    this.router.navigate(['Heroes'])

  }

}
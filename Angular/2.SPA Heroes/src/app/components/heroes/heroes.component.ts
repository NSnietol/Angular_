import { Component, OnInit } from '@angular/core';
import{HereosService,Heroe} from "../../services/heroes.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes:Heroe[]=[];
   
  constructor(private _heroesServices:HereosService,private router:Router) { }

  ngOnInit() {
    this.heroes=this._heroesServices.getHereos()

  }

  
  verHeroe(idx:number){
    this.router.navigate(['Heroe',idx])

  }

}

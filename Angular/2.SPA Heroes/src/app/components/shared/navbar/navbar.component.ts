import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../../services/heroes.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public buscarHeroe(cadena:string){

    console.log(cadena);
    this.router.navigate(['Find',cadena])

  }


}

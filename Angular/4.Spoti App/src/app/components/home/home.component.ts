import { Component, OnInit } from '@angular/core';
import {solicitudC} from "../../services/solicitudC";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private s:solicitudC) {

   }

  ngOnInit() {
  }

}

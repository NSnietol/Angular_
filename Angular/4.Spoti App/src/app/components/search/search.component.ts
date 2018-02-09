import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  busqueda:string="";
  a:string="A";
  
  
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  
  }

  buscarArtista(query:string=""){
    this.spotifyService.getArtistas(query).subscribe();
   
  }

}

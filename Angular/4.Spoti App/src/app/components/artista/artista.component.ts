import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {SpotifyService} from "../../services/spotify.service"


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {


  artista:any;
  relaciones:any[];
  pistas:any[];

  constructor(private activeRoute:ActivatedRoute,
              private spotifyService:SpotifyService, private router:Router  ) { }

  ngOnInit() {

    this.activeRoute.params.map(parametros=>parametros['id']).subscribe(
          id=>{
    
            this.spotifyService.getTop(id).
              subscribe(
                data=> {this.pistas=data;
                console.log("Top");
                console.log(this.pistas);
                }
            );
            

            this.spotifyService.getArtista(id).subscribe(
                data=> {this.artista=data;
                  console.log("Artista")
                  console.log(this.artista);
                }
               

            );

            this.spotifyService.getRelaciones(id).subscribe(

              data=>{this.relaciones=data;
                this.relaciones=this.relaciones.slice(0,10);
                console.log("Relaciones");
                console.log(this.relaciones);


              }
            )
        
      });
  }

     
  regresar(){
    this.router.navigate(['Search'])

  }

}

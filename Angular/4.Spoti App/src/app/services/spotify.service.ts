import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import "rxjs/add/operator/map"

@Injectable()
export class SpotifyService {




  artistas:any []=[];
  urlBusqueda:string="https://api.spotify.com/v1/search";

  urlArtista:string="https://api.spotify.com/v1/artists";
  headers:Headers;

  constructor(private http:Http) {
     this.headers = new Headers();
     this.headers.append("authorization","Bearer BQBObzfkyIDu_L3EAbiPxWwfIZwOYodEZ2TP53j656-spxEr6DIzGJtcVtl_9J0V0DcAiImHV3uV1fU84k4");
    

   }

  getArtistas(termino:string){

  
    let query="?q="+termino+"&type=artist";
    let url=this.urlBusqueda+query;
    let headers=this.headers;
    
    return this.http.get(url, {headers} ) 
            .map( respuesta=>{
              this.artistas=respuesta.json().artists.items;
              console.log(this.artistas);
              console.log("query OK:200");
     });

  }

getRelaciones( id:string){

  let headers=this.headers;
  let query = `/${ id }` +'/related-artists';
  let url = this.urlArtista + query;

  return this.http.get( url ,{headers} )
          .map( res =>{
            //  console.log( res.json()  );
              return res.json().artists;
          })
}
    



  getArtista( id:string ){

 
    let headers=this.headers;
        let query = `/${ id }`;
        let url = this.urlArtista + query;
    
        return this.http.get( url ,{headers} )
                .map( res =>{
                  //  console.log( res.json()  );
                    return res.json();
                })
    
      }
    
    getTop( id:string ){
    


      let headers=this.headers;
        let query = `/${ id }/top-tracks?country=US`;
        let url = this.urlArtista + query;
    
        return this.http.get( url ,{headers})
                .map( res =>{
                    console.log( res.json().tracks  );
                    return res.json().tracks;
                })
    
      }
    

}

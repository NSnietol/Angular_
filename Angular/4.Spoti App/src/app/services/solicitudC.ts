

import { Injectable }  from '@angular/core';
import { Headers, Response, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class solicitudC {

    private loggedIn = false;
    private loginUrl = 'https://accounts.spotify.com/api/token';

    private headers;

    public constructor(private http:Http){
     this.headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    
    }

    public credentials(){

        return this.http.post(this.loginUrl, {'client_id':'e6c4005aadc74cc2ada247a82b9abe3c' , 'client_secret': '1f47021b98ff4a3e8e5ec5bebe3e39b9',
            'grant_type':'client_credentials'}, {headers:this.headers})
            .subscribe((response: Response) => {
                let user = response.json();
                console.log(response.json())
              
        });
}

}


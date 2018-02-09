import {RouterModule,Routes} from "@angular/router";


import {HomeComponent} from "./components/home/home.component"; 
import {SearchComponent} from "./components/search/search.component";
import {ArtistaComponent} from "./components/artista/artista.component";



const APP_ROUTES : Routes = [
    {path: 'Search',component:SearchComponent },
    {path: 'Artista/:id',component:ArtistaComponent },
    {path: 'Home',component: HomeComponent},
    {path: '**',pathMatch: 'full', redirectTo:'Home'}
 
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES,{useHash:false});


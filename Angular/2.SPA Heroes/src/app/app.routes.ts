import {RouterModule,Routes} from "@angular/router";

import {AboutComponent} from "./components/about/about.component";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {HomeComponent} from "./components/home/home.component";
import {HeroeComponent} from "./components/heroe/heroe.component";
import {FindComponent} from "./components/find/find.component";
import {NewsComponent} from "./components/news/news.component";



const APP_ROUTES : Routes = [
    {path: 'About',component: AboutComponent},
    {path: 'Home',component: HomeComponent},
    {path: 'Heroes',component: HeroesComponent},
    {path: 'News',component: NewsComponent},
    {path: 'Heroe/:id',component: HeroeComponent},
    {path: 'Find/:text',component: FindComponent},
    {path: '**',pathMatch: 'full', redirectTo:'Home'}
 
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES,{useHash:false});


//<!-- Se debe configurar el archivo con la instrucción    <base href="/">    cuando el hash:true en el index-->



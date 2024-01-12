import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './peliculas/pages/home/home.component';
import { PeliculaComponent } from './peliculas/pages/pelicula/pelicula.component';
import { SearchComponent } from './peliculas/pages/search/search.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pelicula/:id', component: PeliculaComponent },
    { path: 'search/:text', component: SearchComponent },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
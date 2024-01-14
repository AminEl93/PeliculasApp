import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';

import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
    declarations: [
        NavbarComponent,
        HomeComponent,
        PeliculaComponent,
        SearchComponent
    ],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})

export class PeliculasModule { }

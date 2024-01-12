import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
    declarations: [
        HomeComponent,
        PeliculaComponent,
        SearchComponent
    ],
    imports: [CommonModule]
})

export class PeliculasModule { }

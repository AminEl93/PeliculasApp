import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './components/peliculas-poster-grid/peliculas-poster-grid.component';

import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { SearchComponent } from './pages/search/search.component';

import { PipesModule } from './pipes/pipes.module';

@NgModule({
    declarations: [
        NavbarComponent,
        SlideshowComponent,
        PeliculasPosterGridComponent,
        HomeComponent,
        PeliculaComponent,
        SearchComponent        
    ],
    exports: [
        NavbarComponent,
        SlideshowComponent,
        PeliculasPosterGridComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        PipesModule
    ]
})

export class PeliculasModule { }

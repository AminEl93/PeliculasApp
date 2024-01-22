import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { PeliculasPosterGridComponent } from './components/peliculas-poster-grid/peliculas-poster-grid.component';

import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { CastSlideshowComponent } from './components/cast-slideshow/cast-slideshow.component';
import { SearchComponent } from './pages/search/search.component';

import { PipesModule } from './pipes/pipes.module';

@NgModule({
    declarations: [
        NavbarComponent,
        SlideshowComponent,
        PeliculasPosterGridComponent,
        HomeComponent,
        PeliculaComponent,
        SearchComponent,
        CastSlideshowComponent        
    ],
    exports: [
        NavbarComponent,
        SlideshowComponent,
        PeliculasPosterGridComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        PipesModule
    ]
})

export class PeliculasModule { }

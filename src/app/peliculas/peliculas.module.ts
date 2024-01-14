import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';

import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
    declarations: [
        NavbarComponent,
        SlideshowComponent,
        HomeComponent,
        PeliculaComponent,
        SearchComponent
    ],
    exports: [
        NavbarComponent,
        SlideshowComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})

export class PeliculasModule { }

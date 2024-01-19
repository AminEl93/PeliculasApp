import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PeliculasService } from '../../services/peliculas.service';
import { NavigationService } from '../../services/navigation.service';
import { MovieResponse } from '../../interfaces/movie-response';

@Component({
    selector: 'app-pelicula',
    templateUrl: './pelicula.component.html',
    styleUrls: ['./pelicula.component.css']
})

export class PeliculaComponent implements OnInit {

    public pelicula!: MovieResponse;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _peliculasService: PeliculasService,
        private _navigationService: NavigationService,
        private _router: Router
    ) { }

    ngOnInit(): void {
        // Obtener el ID de una película que viene por la URL
        const { id } = this._activatedRoute.snapshot.params;

        this._peliculasService.getPeliculaDetalle(id).subscribe(movie => {            
            movie && movie.id === +id
                ? (this.pelicula = movie)
                : this._router.navigateByUrl('/home');
        });
    }
    
    goBack() {
        this._navigationService.back();
    }    
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PeliculasService } from '../../services/peliculas.service';

@Component({
    selector: 'app-pelicula',
    templateUrl: './pelicula.component.html'
})

export class PeliculaComponent implements OnInit {

    constructor(private _activatedRoute: ActivatedRoute, private _peliculasService: PeliculasService) { }

    ngOnInit(): void {
        // Obtener el ID de una película que viene por la URL
        const { id } = this._activatedRoute.snapshot.params;
        this._peliculasService.getPeliculaDetalle(id);
    }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
    selector: 'app-peliculas-poster-grid',
    templateUrl: './peliculas-poster-grid.component.html',
    styleUrls: ['./peliculas-poster-grid.component.css']
})

export class PeliculasPosterGridComponent {
    @Input() movies!: Movie[];

    constructor(private router: Router) { }

    // Ir al detalle de una película
    onMovieDetail(movie: Movie) {
        this.router.navigate(['/pelicula', movie.id]);
    }
}

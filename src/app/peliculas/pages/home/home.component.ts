import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    
    public movies: Movie[] = [];
    public moviesSlideshow: Movie[] = [];

    constructor(private _peliculasService: PeliculasService) { }

    ngOnInit(): void {
        this._peliculasService.getCartelera()
            .subscribe(movies => {
                // console.log(resp.results);
                this.movies = movies;
                this.moviesSlideshow = movies;
            })    
    }
}

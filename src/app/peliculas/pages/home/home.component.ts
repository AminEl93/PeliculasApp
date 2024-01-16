import { Component, HostListener, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    
    public movies: Movie[] = [];
    public moviesSlideshow: Movie[] = [];

    // Scroll infinito de las últimas películas
    @HostListener('window:scroll', ['$event'])    
    onScroll() {
        const scroll = (document.documentElement.scrollTop || document.body.scrollTop);
        const documentHeight = (document.documentElement.clientHeight || document.body.clientHeight);
        const maxPosition = (document.documentElement.scrollHeight || document.body.scrollHeight);
        const positionInDocument = (documentHeight + scroll);

        if (positionInDocument === maxPosition) {
            if (this._peliculasService.cargando) return;  
            this._peliculasService.getCartelera().subscribe(movies => {
                this.movies.push(...movies);
            });
        }

        /* Alternativa */
        // const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
        // const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
        // if(pos > max) { mismo código }        
    }

    constructor(private _peliculasService: PeliculasService) { }

    ngOnInit(): void {
        this._peliculasService.getCartelera().subscribe(movies => {
            // console.log(resp.results);
            this.movies = movies;
            this.moviesSlideshow = movies;
        })    
    }
}

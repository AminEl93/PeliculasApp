import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

import { Movie } from '../../interfaces/cartelera-response';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {
    
    public text: string = '';
    public movies: Movie[] = [];
  
    constructor(private _activatedRoute: ActivatedRoute, private _peliculasService: PeliculasService) { }
  
    ngOnInit(): void {  
        this._activatedRoute.params.subscribe(params => { 
            this.text = params['text'];
            this._peliculasService.buscarPeliculas(this.text).subscribe(movies => {
                this.movies = movies;
            });
        });
    }
}
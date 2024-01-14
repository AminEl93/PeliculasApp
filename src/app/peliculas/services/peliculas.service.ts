import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class PeliculasService {
  
    private baseUrl: string = 'https://api.themoviedb.org/3';
    private carteleraPage = 1;

    constructor(private _http: HttpClient) { }

    get params() {
        return {
            api_key: environment.api_key,
            language: 'es-ES',
            page: this.carteleraPage.toString()
        }
    }

    // Obtener la cartelera de todas las películas actuales
    getCartelera(): Observable<Movie[]> {
        return this._http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`, {
            params: this.params
        }).pipe(
               map( (resp) => resp.results ),
               tap( () => {this.carteleraPage += 1;} )
           );
    }    
}
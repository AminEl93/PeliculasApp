import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';

import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { MovieResponse } from '../interfaces/movie-response';
import { CreditsReponse, Cast } from '../interfaces/credits-response';

@Injectable({
    providedIn: 'root'
})

export class PeliculasService {
  
    private baseUrl: string = 'https://api.themoviedb.org/3';
    private carteleraPage = 1;
    public cargando: boolean = false;

    constructor(private _http: HttpClient) { }

    // Parámetros de la URL para obtener la cartelera de películas
    get params() {
        return {
            api_key: environment.api_key,
            language: 'es-ES',
            page: this.carteleraPage.toString() 
        }
    }

    // Resetear la cartelera de películas original
    resetCarteleraPage() {
        this.carteleraPage = 1;
    }

    // Obtener la cartelera de todas las películas actuales
    getCartelera(): Observable<Movie[]> {
        if (this.cargando) return of([]); // Cargando las películas
        this.cargando = true;

        return this._http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`, {
            params: this.params
        }).pipe(
               map( (resp) => resp.results ),
               tap(() => {
                    this.carteleraPage += 1;
                    this.cargando = false;
               })
           );
    }
    
    // Buscar las últimas películas
    buscarPeliculas(text: string): Observable<Movie[]> {
        const params = { ...this.params, page: '1', query: text };    
        return this._http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`, { params })
            .pipe( map(resp => resp.results) )    
    }

    // Obtener el detalle de cada película con su información respectiva
    getPeliculaDetalle(id: string) {
        return this._http.get<MovieResponse>(`${this.baseUrl}/movie/${id}`, { params: this.params })
            .pipe( catchError(err => of(null)) );
    }

    // Obtener el reparto de actores/actrices de cada película
    getCast(id: string): Observable<Cast[]> {
        return this._http.get<CreditsReponse>(`${this.baseUrl}/movie/${id}/credits`, {
            params: this.params
        }).pipe(
            map( resp => resp.cast ),
            catchError( err => of([]) )
        );    
    }
}
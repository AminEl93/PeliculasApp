import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {

    public moviesDate: Date = new Date();
    
    constructor(private _router: Router) { }

    buscarPelicula(text: string) {
        text = text.trim();
        if (text.length === 0) return;
        this._router.navigate(['/search', text]);
    }
}

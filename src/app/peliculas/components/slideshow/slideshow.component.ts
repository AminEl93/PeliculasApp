import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';

import { Movie } from '../../interfaces/cartelera-response';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.css']
})

export class SlideshowComponent implements OnInit, AfterViewInit {

    @Input() movies!: Movie[];

    public movieSwiper!: Swiper;

    ngAfterViewInit(): void {
        this.movieSwiper = new Swiper('.swiper-container', { loop: true });
    }
    
    ngOnInit(): void {
        // console.log(this.movies);
    }

    // Botón para ir a la slide anterior
    onSlidePrev(){
        this.movieSwiper.slidePrev();
    }

    // Botón para ir a la slide siguiente
    onSlideNext(){
        this.movieSwiper.slideNext();
    }
}

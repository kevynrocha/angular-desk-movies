import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../models/movies.model';

@Component({
	selector: 'app-popular',
	templateUrl: './popular.component.html',
	styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
	movies: Movies[] = [];
	erro: any;

	constructor(private moviesService: MoviesService) {
		this.showMovies();
	}

	ngOnInit(): void { }

	showMovies() {
		this.moviesService.getMoviesPopular().subscribe((data: any) => {
			this.movies = data.results;
		}, (error: any) => {
			this.erro = error;
		})
	}
}

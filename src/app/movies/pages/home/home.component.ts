import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../models/movies.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

	movies: Movies[] = [];
	erro: any;

	constructor(private moviesService: MoviesService) { 
		this.showMovies();		
	}

	ngOnInit(): void { }

	showMovies() {
		this.moviesService.getMoviesNow().subscribe((data: any)  => {
			this.movies = data.results;
		}, (error: any) => {
			this.erro = error;
		})
	}	
}

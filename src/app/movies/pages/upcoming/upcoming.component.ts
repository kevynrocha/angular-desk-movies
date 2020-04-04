import { Component, OnInit } from '@angular/core';

import { Movies } from '../../models/movies.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})

export class UpcomingComponent implements OnInit {
  	movies: Movies[] = [];
	erro: any;

	constructor(private moviesService: MoviesService) {
		this.showMovies();
	}

	ngOnInit(): void { }

	showMovies() {
		this.moviesService.getMoviesUpcoming().subscribe((data: any) => {
			this.movies = data.results;
		}, (error: any) => {
			this.erro = error;
		})
	}
}

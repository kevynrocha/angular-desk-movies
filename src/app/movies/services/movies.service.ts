import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

	constructor(private http: HttpClient) { }

	public getMoviesNow():Observable<any> {
		return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=32b2538fae9d6a2e14d1539dde85893f&language=pt-BR')
	}

	public getMoviesPopular():Observable<any> {
		return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=32b2538fae9d6a2e14d1539dde85893f&language=pt-BR')
	}

	public getMoviesUpcoming():Observable<any> {
		return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=32b2538fae9d6a2e14d1539dde85893f&language=pt-BR')
	}

	public getDetails():Observable<any> {
		return this.http.get('https://api.themoviedb.org/3/movie/1?api_key=32b2538fae9d6a2e14d1539dde85893f&language=pt-BR')
	}
}

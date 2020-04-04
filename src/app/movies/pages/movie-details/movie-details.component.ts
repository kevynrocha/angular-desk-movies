import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-movie-details',
	templateUrl: './movie-details.component.html',
	styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit {

	id: number;
	subscribe: Subscription;
	movie: any;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.subscribe = this.route.params.subscribe(
			(params: any) => {
				this.id = params['id'];	
			}
		);		
	}

	ngOnDestroy() {
		this.subscribe.unsubscribe();
	}
}

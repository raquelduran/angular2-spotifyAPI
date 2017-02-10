import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';


@Injectable()
export class AJAXService {
	private topTracks: Subject<any> = new Subject<any>();
	private url = 'https://api.spotify.com/v1/albums/63y4nBcBRcGFCQ8fgyxXVB'
	
	constructor(private ajax:Http) { 
	setTimeout( () => {this.peticionAjax(this.url);}  , 2000);
	}

	searchTracks(): Observable<any>{
		return this.topTracks.asObservable();
	}

	peticionAjax(url){
		
		this.ajax.get(url)
		.map(response => response.json())
		.subscribe(data => this.topTracks.next(data))
	}

}

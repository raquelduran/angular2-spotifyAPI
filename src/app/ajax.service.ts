import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';


@Injectable()
export class AJAXService {
	private tracksResult: Subject<any> = new Subject<any>();

	private searchResult: Subject<any> = new Subject<any>();

	private albumsResult: Subject<any> = new Subject<any>();

	private artistsResult: Subject<any> = new Subject<any>();

	private actualType = 'track';

	//private url = 'https://api.spotify.com/v1/albums/63y4nBcBRcGFCQ8fgyxXVB'
	constructor(private ajax:Http) { 
	}
	stablishType(type){
		this.actualType = type;
		console.log(this.actualType);
	}
	showType(){
		return this.actualType;
	}

	searchTracks(): Observable<any>{
		return this.tracksResult.asObservable();
	}

	peticionId(id, type = this.actualType){
		if (type == 'album'){
			this.ajax.get("https://api.spotify.com/v1/albums/" + id)
			.map(response => response.json())
			.subscribe(data => this.albumsResult.next(data))
		}
		else if (type == 'artist'){
			this.ajax.get("https://api.spotify.com/v1/artists/" + id)
			.map(response => response.json())
			.subscribe(data => this.artistsResult.next(data))
		}
		else if (type == 'track'){
			this.ajax.get("https://api.spotify.com/v1/tracks/" + id)
			.map(response => response.json())
			.subscribe(data => this.tracksResult.next(data))
		}
	}

	peticionSearch(q, type = this.actualType){
		console.log('ha entrado en peticionSearch')
		if (type == 'album'){
			this.ajax.get("https://api.spotify.com/v1/search?q="+q+"&type="+type)
			.map(response => response.json())
			.subscribe(data => this.albumsResult.next(data))
		}
		else if (type == 'artist'){
			this.ajax.get("https://api.spotify.com/v1/search?q="+q+"&type="+type)
			.map(response => response.json())
			.subscribe(data => this.artistsResult.next(data))
		}
		else if (type == 'track'){
			this.ajax.get("https://api.spotify.com/v1/search?q="+q+"&type="+type)
			.map(response => response.json())
			.subscribe(data => this.tracksResult.next(data))
		}
	}
}

/*
ARTIST
https://api.spotify.com/v1/search?q=tania%20bowra&type=artist
ALBUM
https://api.spotify.com/v1/search?q=arrival&type=album
TRACK
https://api.spotify.com/v1/search?q=destino%20o%20casualidad&type=track
*/
import { Component, OnInit } from '@angular/core';
import { AJAXService } from '../ajax.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
	topAlbums:any;

constructor(private ajax_s: AJAXService) { 
    this.ajax_s.stablishType('album');
    this.ajax_s.peticionSearch('alejandro%20sanz');
	}

  ngOnInit() {
  	this.ajax_s.searchAlbums().subscribe(
  		data => {
          this.topAlbums = data;
          console.log(this.topAlbums);
        })
  }
     structureArtists(item){
      var Artistslist = [];
      for (var i = 0; i < item.length; ++i) {
        Artistslist.push(item[i].name);
      }
      return Artistslist.join(', ');
    }

}

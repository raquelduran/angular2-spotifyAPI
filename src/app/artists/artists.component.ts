import { Component, OnInit } from '@angular/core';
import { AJAXService } from '../ajax.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
	topArtists:any;

constructor(private ajax_s: AJAXService) { 
    this.ajax_s.stablishType('artist');
    this.ajax_s.peticionSearch('malu');
	}

  ngOnInit() {
  	this.ajax_s.searchArtists().subscribe(
  		data => {
          this.topArtists = data;
          console.log(this.topArtists);
        })
  }

  structureGenres(item){
      var Genreslist = [];
      for (var i = 0; i < item.length; ++i) {
        Genreslist.push(item[i]);
      }
      return Genreslist.join(', ');
    }


   showImage(imgs){
   	if(imgs[0] == undefined	){
   		return "https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg";
   	}
   	else{
   		return imgs[0].url;
   	}

   }
}

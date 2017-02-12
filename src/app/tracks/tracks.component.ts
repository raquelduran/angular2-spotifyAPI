import { Component, OnInit } from '@angular/core';
import { AJAXService } from '../ajax.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  topTracks: any;

  
  constructor(private ajax_s: AJAXService) { 
    this.ajax_s.stablishType('track');
    this.ajax_s.peticionSearch('lagrimas%20desordenadas');
  }

    ngOnInit() {
      this.ajax_s.searchTracks().subscribe(
        data => {
          this.topTracks = data;
          console.log(this.topTracks);
        })
    }

    structureDuration(ms){
      var min;
      var sec;
      min = Math.floor(ms/60000);
      sec = Math.round((ms/1000)%60);
      if (sec<10){
        sec ='0'+sec;
      }
      return min+':'+sec;

    }
    structureArtists(item){
      var Artistslist = [];
      for (var i = 0; i < item.length; ++i) {
        Artistslist.push(item[i].name);
      }
      return Artistslist.join(', ');
    }
}
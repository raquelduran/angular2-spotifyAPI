import { Component, OnInit } from '@angular/core';
import { AJAXService } from '../ajax.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

constructor(private ajax_s: AJAXService) { 
    this.ajax_s.stablishType('artist');
	}

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AJAXService } from '../ajax.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

constructor(private ajax_s: AJAXService) { 
    this.ajax_s.stablishType('album');
	}

  ngOnInit() {
  }

}

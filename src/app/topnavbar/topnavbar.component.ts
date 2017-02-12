import { Component, OnInit } from '@angular/core';
import { AJAXService } from '../ajax.service';


@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {
	title: string;
	themes = [];
	selectedTheme ='FLATLY';
	link="https://bootswatch.com/darkly/bootstrap.min.css";
  private input_content;
  private actualComponent;


  constructor(private ajax_s: AJAXService) { 
  	this.title = "Spotify API Project";
    this.actualComponent = ajax_s.showType();

  }
  ngOnInit() {
  }

  funcionInput(){
    console.log(encodeURI(this.input_content));
    this.actualComponent = this.ajax_s.showType();
    this.ajax_s.peticionSearch(encodeURI(this.input_content), this.actualComponent)
    this.input_content="";

  }

}

  
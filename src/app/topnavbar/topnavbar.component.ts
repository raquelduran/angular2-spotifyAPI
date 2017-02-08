import { Component, OnInit } from '@angular/core';


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

  constructor() { 
  	this.title = "Spotify API Project";
  	this.themes = [
  	{name:'DARKLY', link: 'https://bootswatch.com/darkly/bootstrap.min.css'},
  	{name:'FLATLY', link:'https://bootswatch.com/flatly/bootstrap.min.css'}
  	]
  }
  ngOnInit() {
  }
  onSelect(theme) {
  this.selectedTheme = theme.name;
  }

}

  
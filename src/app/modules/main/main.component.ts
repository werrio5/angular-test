import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

fetchData = [{"title":"saurabh","description":"dd","tagline":"tt","date":"dd"},{"title":"aman","description":"dd","tagline":"tt","date":"dd"},{"title":"jessica","description":"dd","tagline":"tt","date":"dd"},{"title":"rosh","description":"dd","tagline":"tt","date":"dd"}];
}
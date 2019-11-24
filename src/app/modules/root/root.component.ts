import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})


export class RootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
fetchData = [{"title":"saurabh","description":"dd","tagline":"tt","date":"dd"},{"title":"aman","description":"dd","tagline":"tt","date":"dd"},{"title":"jessica","description":"dd","tagline":"tt","date":"dd"},{"title":"rosh","description":"dd","tagline":"tt","date":"dd"}];

}

import { Component } from '@angular/core';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {
  name:string;
  title = '';

  constructor(private headerService: HeaderService) {
    this.name= "123";
  }

  ngOnInit() {
    this.headerService.title.subscribe(title => {
      this.title = title;
    });
  }


} 


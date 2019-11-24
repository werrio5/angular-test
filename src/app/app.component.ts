import { Component } from '@angular/core';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ] 
  
})


export class AppComponent  {
  title = '';

  constructor(private headerService: HeaderService) {
     this.headerService.setTitle('Hello, guest!');
  }

  ngOnInit() {
    this.headerService.title.subscribe(title => {
      this.title = title;
    });
  }


} 


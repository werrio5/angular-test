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
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');  
      if(token!=null) 
        this.headerService.setTitle('Hello, '+username+'!');
        else
     this.headerService.setTitle('Hello, guest!');
  }

  ngOnInit() {     

    this.headerService.title.subscribe(title => {
     this.title = title;
    });
  }

logOut(){
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  this.headerService.setTitle('Hello, guest!');
}

} 


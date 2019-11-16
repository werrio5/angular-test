import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';

@Component({
  selector: 'btn',
  templateUrl: 'button.html',
})
export class ButtonComponent {

constructor(private router: Router,private AppComponent: AppComponent){
}
  onClick() {  
    this.AppComponent.updatePreviousUrl('http://google.com');
  this.router.navigate(['home']);
  }  
}
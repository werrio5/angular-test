import { Component } from '@angular/core';
import { HeaderService } from '../header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'btn',
  templateUrl: 'button.html',
})
export class ButtonComponent {

constructor(
  private router: Router,
private headerService: HeaderService){}


  onClick() {  
    this.headerService.setTitle('About');
  this.router.navigate(['home']);
  }  
}
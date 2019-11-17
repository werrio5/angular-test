import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

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
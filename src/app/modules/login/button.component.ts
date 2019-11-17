import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'btn',
  templateUrl: 'button.html',
 // providers: [HeaderService],
})
export class ButtonComponent  {

constructor(
  private router: Router,
private headerService: HeaderService
){}


  onClick() {  
    this.headerService.setTitle('4trr');
  this.router.navigate(['home']);
  }  
}
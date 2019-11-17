import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
) { }

  ngOnInit() {
  }

  logIn(l:string,p:string){
     this.headerService.setTitle('Hello, '+l);
     this.router.navigate(['home']);
  }

}

//////////////////////////////////////////



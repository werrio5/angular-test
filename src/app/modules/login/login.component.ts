import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { RestService } from '../../services/rest.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private restService: RestService
) { }

  ngOnInit() {
  }

  logIn(l:string,p:string){
     
     const params = {
      login: l,
      password: p
    };
    this.restService.doCall('logIn', params)
      .subscribe((res: any) => {
        //console.log(res);
        this.headerService.setTitle('Hello, '+res.username+'!');
      });
      
     this.router.navigate(['home']);
  }

}

//////////////////////////////////////////



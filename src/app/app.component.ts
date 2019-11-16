import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

@Injectable()
export class AppComponent  {
  name:string;
  userName: Observable<string>;

  private AppComponent: Subject<string>=new Subject();

  constructor() {
    this.userName = this.AppComponent.asObservable();
    this.name= "123";
  }

  updateName(newUsername: string) {
    this.AppComponent.next(newUsername);
  }

} 


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
  name: Observable<string>;

   private nameSubject: Subject<string>=new Subject();
  constructor() {
    this.name= this.nameSubject.asObservable();
  }
  updatePreviousUrl(newName: string) {
    this.nameSubject.next(newName);
  }
} 

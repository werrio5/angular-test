import {Component} from '@angular/core';
@Component({
  selector: 'test-button',
  template: '<button (click)="onClick()">Click me!</button>{{clickMessage}}',
})
export class ButtonComponent {
  clickMessage = '';

  onClick():void {
    this.clickMessage = 'You are my hero!';
  }
}
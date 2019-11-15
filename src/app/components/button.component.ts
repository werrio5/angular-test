import {Component} from '@angular/core';

export class ButtonComponent {
  clickMessage = '';

  onClick():void {
    console.log('You are my hero!');
  }
}
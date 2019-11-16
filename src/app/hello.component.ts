import { Component, Input,OnInit} from '@angular/core';
import { AppComponent } from './app.component';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit{
  @Input() name: string;

   constructor(private AppComponent: AppComponent) {
  }

  ngOnInit() {

  }
  
onUpdateUrl(prevUrl: string){
    this.AppComponent.updatePreviousUrl('http://google.com');
  }
}

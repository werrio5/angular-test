import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LoginModule } from './modules/login.module'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ButtonComponent } from './components/button.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
      ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    ButtonComponent
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

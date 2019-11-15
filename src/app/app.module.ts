import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {LoginModule} from './modules/login/login.module'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './modules/login/login.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
]

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    
    LoginModule
      ],
  declarations: [ 
    AppComponent,
    HelloComponent,
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

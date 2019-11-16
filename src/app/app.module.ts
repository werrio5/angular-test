import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {LoginModule} from './modules/login/login.module'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './modules/main/main.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: MainComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    
    LoginModule
      ],
      exports:[
        AppComponent,
      ],

  declarations: [ 
    AppComponent,
    HelloComponent,
    MainComponent,
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

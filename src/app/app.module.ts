import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeaderService } from './services/header.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './modules/main/main.component';
import { ButtonComponent } from './modules/login/button.component';
import { RestService } from './services/rest.service';


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
    
      ],
      exports:[
      ],
      providers: [
        HeaderService,
        RestService
        ],

  declarations: [ 
    AppComponent,
    MainComponent,
    LoginComponent,
    ButtonComponent,
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

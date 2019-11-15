import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ButtonComponent } from './components/button.component';
import { LoginComponent } from './modules/login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
]

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
      ],
  declarations: [ 
    AppComponent,
    HelloComponent,
    ButtonComponent,
    LoginComponent
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

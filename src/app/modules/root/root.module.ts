import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RootComponent },
];

@NgModule({
  imports: [
   // CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [RootComponent]
})
export class RootModule { }
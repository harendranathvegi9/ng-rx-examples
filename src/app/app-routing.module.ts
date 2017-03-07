import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeyboardComponent } from './shared/keyboard/keyboard.component';

const routes: Routes = [
  {
    path: '',
    component: KeyboardComponent,
    children: []
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

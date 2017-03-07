import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeyboardComponent } from './keyboard.component';
import { KeyComponent } from './key/key.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [KeyboardComponent],
  declarations: [
    KeyboardComponent,
    KeyComponent
  ]
})
export class KeyboardModule { }

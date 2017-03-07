import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { KeyboardModule } from './keyboard/keyboard.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KeyboardModule,
  ],
  exports:[
    FormsModule,
    KeyboardModule,
  ],
  declarations: []
})
export class SharedModule { }

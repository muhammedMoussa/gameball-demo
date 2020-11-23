import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const SHARED_MODULES = [CommonModule];

@NgModule({
  declarations: [],
  imports: [
    ...SHARED_MODULES
  ],
  exports: [
    ...SHARED_MODULES
  ]
})
export class SharedModule { }

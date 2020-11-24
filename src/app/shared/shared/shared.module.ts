import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';

const SHARED_MODULES = [CommonModule];

const SHARED_COMPONENTS = [LoaderComponent]
@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [
    ...SHARED_MODULES
  ],
  exports: [
    ...SHARED_MODULES,
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule { }

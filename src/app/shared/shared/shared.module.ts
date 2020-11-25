import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule } from '@angular/forms';

const SHARED_MODULES = [CommonModule, FormsModule];

const SHARED_COMPONENTS = [LoaderComponent];
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

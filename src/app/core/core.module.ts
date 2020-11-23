import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

const CORE_COMPONENTS = [
  HomeComponent
];

@NgModule({
  declarations: [...CORE_COMPONENTS],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GamesService } from './services/games.service';
import { NavComponent } from './components/nav/nav.component';

const CORE_COMPONENTS = [
  HomeComponent, 
  NavComponent
];

const CORE_SERVICES = [
  GamesService
];
@NgModule({
  declarations: [...CORE_COMPONENTS],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    ...CORE_SERVICES,
  ],
  exports: [
    ...CORE_COMPONENTS
  ]
})

export class CoreModule { }

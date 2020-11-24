import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { GamesService } from './services/games.service';

const CORE_COMPONENTS = [
  HomeComponent
];

const CORE_SERVICES = [
  GamesService
];
@NgModule({
  declarations: [...CORE_COMPONENTS],
  imports: [
    CommonModule
  ],
  providers: [
    ...CORE_SERVICES
  ]
})

export class CoreModule { }

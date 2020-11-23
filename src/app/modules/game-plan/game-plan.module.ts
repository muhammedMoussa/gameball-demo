import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared/shared.module';

import { GamePlanShellComponent } from './containers/game-plan-shell/game-plan-shell.component';

const routes: Routes = [{
  path: '',
  component: GamePlanShellComponent
}];

@NgModule({
  declarations: [GamePlanShellComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})

export class GamePlanModule { }
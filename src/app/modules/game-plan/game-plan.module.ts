import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared/shared.module';

import { GamePlanShellComponent } from './containers/game-plan-shell/game-plan-shell.component';
import { GpLevelsComponent } from './components/gp-levels/gp-levels.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { QuestsComponent } from './components/quests/quests.component';
import { GpTabsComponent } from './components/gp-tabs/gp-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: GamePlanShellComponent
  }
];

@NgModule({
  declarations: [
    GamePlanShellComponent, 
    GpLevelsComponent, 
    ChallengesComponent, 
    QuestsComponent, 
    GpTabsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})

export class GamePlanModule { }
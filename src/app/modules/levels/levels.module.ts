import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared/shared.module';

import { LevelsShellComponent } from './containers/levels-shell/levels-shell.component';

const routes: Routes = [{
  path: '',
  component: LevelsShellComponent
}];

@NgModule({
  declarations: [LevelsShellComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})

export class LevelsModule { }

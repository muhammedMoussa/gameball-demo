import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared/shared.module';

import { DashboardShellComponent } from './containers/dashboard-shell/dashboard-shell.component';

const routes: Routes = [{
  path: '',
  component: DashboardShellComponent
}];

@NgModule({
  declarations: [DashboardShellComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class DashboardModule { }

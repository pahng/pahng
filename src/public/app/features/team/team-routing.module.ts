import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamComponent } from './team.component';
import { TeamsListComponent } from './teams-list/teams-list.component';

const routes: Routes = [
  {
      path: '',
      component: TeamComponent,
      children: [
          { path: '', component: TeamsListComponent },
          { path: 'create', component: TeamCreateComponent }
      ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }

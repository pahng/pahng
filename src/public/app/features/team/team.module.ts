import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { SharedModule } from '../../shared/shared.module';
import { TeamsListComponent } from './teams-list/teams-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TeamRoutingModule
  ],
  declarations: [
    TeamComponent,
    TeamCreateComponent,
    TeamsListComponent
  ],
})
export class TeamModule { }

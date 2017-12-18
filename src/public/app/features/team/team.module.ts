import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamComponent } from './team.component';

@NgModule({
  imports: [
    CommonModule,
    TeamRoutingModule
  ],
  declarations: [TeamCreateComponent, TeamComponent]
})
export class TeamModule { }

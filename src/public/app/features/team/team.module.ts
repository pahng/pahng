import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { TeamService } from './team.service';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TeamRoutingModule
  ],
  declarations: [
    TeamComponent, 
    TeamCreateComponent
  ],
  providers: [
    TeamService,
  ]
})
export class TeamModule { }

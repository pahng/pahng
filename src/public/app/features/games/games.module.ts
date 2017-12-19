import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { GamesComponent } from './games.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GamesRoutingModule,
  ],
  declarations: [GamesComponent]
})
export class GamesModule { }

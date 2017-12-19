import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }

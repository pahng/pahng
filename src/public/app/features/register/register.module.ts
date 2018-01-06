import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RegisterRoutingModule,
    ],
    declarations: [
        RegisterComponent,
    ],
})
export class RegisterModule { }

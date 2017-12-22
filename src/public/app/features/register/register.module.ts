import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RegisterRoutingModule,
    ],
    declarations: [
        RegisterComponent,
    ],
    providers: [
        RegisterService,
    ]
})
export class RegisterModule { }

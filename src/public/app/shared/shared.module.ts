import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DropdownComponent } from './dropdown/dropdown.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserService } from './services/user.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    declarations: [
        DropdownComponent,
        MainLayoutComponent,
        NavbarComponent,
        SideMenuComponent,
    ],
    exports: [
        DropdownComponent,
        MainLayoutComponent,
        NavbarComponent,
        SideMenuComponent,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [UserService]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './dropdown/dropdown.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  imports: [
    CommonModule
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
  ]
})
export class SharedModule { }

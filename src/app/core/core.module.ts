import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ NavbarComponent, MainLayoutComponent, SideMenuComponent ],
  providers: [ LoggerService ],
  exports: [ NavbarComponent, MainLayoutComponent, SideMenuComponent ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}

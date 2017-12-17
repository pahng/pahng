import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoggerService } from './logger.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [
    NavbarComponent,
    MainLayoutComponent,
    SideMenuComponent,
  ],
  providers: [
    LoggerService
  ],
  exports: [
    RouterModule,
    NavbarComponent,
    MainLayoutComponent,
    SideMenuComponent,
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}

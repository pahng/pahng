import {NgModule, Optional, SkipSelf} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LoggerService } from './logger.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    declarations: [
    ],
    providers: [
        LoggerService
    ],
    exports: [
        RouterModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ]
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AuthModule } from './auth/auth.module';



@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
        CoreModule,
        AppRoutingModule,
        SharedModule,
        AuthModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

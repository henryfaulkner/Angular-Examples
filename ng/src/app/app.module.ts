import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomErrorHandler } from './core/services/custom-error-handler.service';
import { CommonSharedModule } from './shared/common/common-shared.module';
import { KendoGridRemoteComponent } from './pages/kendo/kendo-grid-remote/kendo-grid-remote.component';
import { ErrorBoundaryComponent } from './shared/common/error-boundary/error-boundary.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    KendoGridRemoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonSharedModule,
    HttpClientModule
  ],
  providers: [
    ErrorBoundaryComponent,
    { provide: ErrorHandler, useClass: CustomErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

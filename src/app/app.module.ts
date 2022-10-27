import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayTextComponent } from './pages/display-text/display-text.component';
import { CommonService } from './shared/services/common.service';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { AuthService } from './auth/auth.service';
import { ParameterSelectorComponent } from './pages/inventory/parameter-selector/parameter-selector/parameter-selector.component';
import { httpInterceptorProviders } from './interceptors/interceptor.index';
import { InventoryService } from './inventory/inventory.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DisplayTextComponent,
    InventoryComponent,
    ParameterSelectorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgxJsonViewerModule,
  ],
  providers: [
    CommonService,
    AuthService,
    InventoryService,
    ...httpInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

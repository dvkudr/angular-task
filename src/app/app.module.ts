import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CommonService } from './shared/services/common.service';
import { AuthService } from './shared/services/auth.service';
import { InventoryService } from './inventory/inventory.service';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { DisplayTextComponent } from './pages/display-text/display-text.component';
import { ParameterComponent } from './pages/inventory/components/parameter/parameter.component';
import { httpInterceptorProviders } from './interceptors/interceptor.index';
import { CommonEffects } from './store/common/effects/common.effects';
import { commonFeature } from './store/common/common.state';
import { commonReducers } from './store/common/reducers/common.reducers';
import { InventoryEffects } from './store/inventory/effects/inventory.effects';
import { inventoryFeature } from './store/inventory/inventory.state';
import { inventoryReducers } from './store/inventory/reducers/inventory.reducers';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DisplayTextComponent,
    InventoryComponent,
    ParameterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgxJsonViewerModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(commonFeature, commonReducers),
    StoreModule.forFeature(inventoryFeature, inventoryReducers),
    EffectsModule.forRoot([CommonEffects, InventoryEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      name: 'inventory-app',
      maxAge: 20,
    }),
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayTokenComponent } from './pages/display-token/display-token.component';
import { CommmonService } from './shared/services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DisplayTokenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [CommmonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

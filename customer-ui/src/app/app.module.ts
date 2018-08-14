import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {CustomerService} from './services/customer.service';

import {HttpClientModule } from '@angular/common/http';
import { CusViewComponent } from './components/cus-view/cus-view.component';


@NgModule({
  declarations: [
    AppComponent,
    CusViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

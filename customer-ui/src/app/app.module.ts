import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {CustomerService} from './services/customer.service';

import {HttpClientModule } from '@angular/common/http';
import { CusViewComponent } from './components/cus-view/cus-view.component';
import { HomeComponent } from './components/home/home.component';
import {ReactiveFormsModule } from '@angular/forms';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    CusViewComponent,
    HomeComponent,
    ViewRegistrationComponent,
    DeleteCustomerComponent,
    UpdateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

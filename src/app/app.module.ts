import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from './service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { DataTablesModule } from 'angular-datatables';
import { GroupedCutomerListComponent } from './customer/grouped-cutomer-list/grouped-cutomer-list.component';
import { CustomersListComponent } from './customer/customers-list/customers-list.component';
import { BaseComponent } from './customer/base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerListComponent,
    UpdateCustomerComponent,
    GroupedCutomerListComponent,
    CustomersListComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

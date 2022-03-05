import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { GroupedCutomerListComponent } from './customer/grouped-cutomer-list/grouped-cutomer-list.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'groupedCustomers', component: GroupedCutomerListComponent },
  { path: 'update/:id', component: UpdateCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

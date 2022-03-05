import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { isValidPhoneNumber } from 'src/app/utils/phone-validator';
import { CountryCodeProcessorFactory } from '../../service/processors/CountryCodeProcessorFactory';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent extends BaseComponent implements OnInit {
  customers = [];

  constructor(private customerService: CustomerService,
              private router: Router) {
      super();
      setTimeout(() => {
          $(() => {
            $('#customerlist').DataTable();
          });
        }, 2000);

    }

    ngOnInit(): void{
      this.subscriptions.push(this.customerService.getCustomers().subscribe((customers) => {
        Object.keys(customers).forEach(key => {
          let customer = customers[key];
          const customerPhoneNumber = customer.phone;
          const countryCode = customerPhoneNumber.substring(0, 5);

          const countryCodeProcessorFactory = new CountryCodeProcessorFactory();
          const countryCodeService = countryCodeProcessorFactory.getCountryCodeProcessor(countryCode);
          customer = countryCodeService.process(customer);
          this.customers.push(customer);

        });

        setTimeout(() => {
            $(() => {
              $('#customerlist').DataTable();
            });
          }, 2000);

        }));
      }

  deleteCustomer(id: number) {
    this.subscriptions.push(this.customerService.deleteCustomer(id)
      .subscribe(
        data => {
          console.log(data);
          this.customers = this.customers.filter(obj => obj.id !== id);
        },
        error => console.log(error)));
  }

  updateCustomer(id: number){
    this.router.navigate(['update', id]);
  }

}

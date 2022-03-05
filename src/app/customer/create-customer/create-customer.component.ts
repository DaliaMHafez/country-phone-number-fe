
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/model/customer.model';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent extends BaseComponent implements OnInit {

  customer: Customer = new Customer();
  submitted = false;

  constructor(private customerService: CustomerService,
              private router: Router) {
      super();
     }

  ngOnInit(): void {
  }


  onSubmit(): void {
    this.submitted = true;
    this.subscriptions.push(this.customerService.createCustomer(this.customer)
    .subscribe(data => console.log(data), error => console.log(error)));
    this.customer = new Customer();
    this.router.navigate(['/customers']);
  }

 }


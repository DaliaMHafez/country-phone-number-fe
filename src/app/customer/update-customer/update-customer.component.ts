import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/service/customer.service';
import { ApiResponse } from 'src/app/model/api.response';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent extends BaseComponent implements OnInit {

  id: number;
  customer: Customer;
  apiResponse: ApiResponse;

  constructor(private route: ActivatedRoute, private router: Router,
              private customerService: CustomerService) {
      super();
     }

  ngOnInit(): void {
    this.customer = new Customer();

    this.id = this.route.snapshot.params.id;
    this.subscriptions.push(this.customerService.getCustomerById(this.id)
      .subscribe(data => {
        this.customer = data;
      }, error => console.log(error)));
  }

  onSubmit() {
    this.subscriptions.push(this.customerService.updateCustomer(this.id, this.customer)
      .subscribe(data => console.log(data), error => console.log(error)));
    this.customer = new Customer();
    this.router.navigate(['/customers']);
    }

    listCustomers(){
    this.router.navigate(['customers']);
  }
}

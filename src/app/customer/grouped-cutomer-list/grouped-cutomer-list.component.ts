import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { Router } from '@angular/router';
import { CountryCode } from 'src/app/model/enums/countrycode';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-grouped-cutomer-list',
  templateUrl: './grouped-cutomer-list.component.html',
  styleUrls: ['./grouped-cutomer-list.component.css']
})
export class GroupedCutomerListComponent extends BaseComponent implements OnInit {
  customers = [];
  cameronPhoneNos = [];
  ethiopiaPhoneNos = [];
  moroccoPhoneNos = [];
  mozambiquePhoneNos = [];
  ugandaPhoneNos = [];

  constructor(private customerService: CustomerService,
              private router: Router) {
      super();
      setTimeout(() => {
          $(() => {
              $('#groupedcustomerlist').DataTable({ searching: false, paging: false, info: false, ordering: false });
            });
        }, 2000);
    }

   ngOnInit(): void{
    this.subscriptions.push(this.customerService.getCustomers().subscribe((customers) => {

      Object.keys(customers).forEach(key => {
        const customer = customers[key];
        const countryCode = customer.phone.substring(0, 5);

        if (CountryCode.CAMEROON === countryCode ) {
          this.cameronPhoneNos.push(customer);
        }
        else if (CountryCode.ETHIOPIA === countryCode ) {
          this.ethiopiaPhoneNos.push(customer);
        }
        else if (CountryCode.MOROCCO === countryCode ) {
          this.moroccoPhoneNos.push(customer);
        }
        else if (CountryCode.MOZAMBIQUE === countryCode ) {
          this.mozambiquePhoneNos.push(customer);
        }
        else if (CountryCode.UGANDA === countryCode ) {
          this.ugandaPhoneNos.push(customer);
        }

      });
      }));

    setTimeout(() => {
        $(() => {
          $('#groupedcustomerlist').DataTable();
        });
      }, 2000);

  }

  public get countryCode(): typeof CountryCode {
    return CountryCode;
  }

}

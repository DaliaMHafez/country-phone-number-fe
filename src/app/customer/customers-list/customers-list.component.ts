import { Component, OnInit, Input } from '@angular/core';
import { CountryCode } from 'src/app/model/enums/countrycode';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  @Input() tableData;
  @Input() countryCode;

  constructor() { }

  ngOnInit(): void {
  }


  public get countryName(): typeof CountryCode {
    return CountryCode;
  }
}

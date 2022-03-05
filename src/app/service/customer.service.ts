import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/index';
import { ApiResponse } from '../model/api.response';
import { Customer } from '../model/customer.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = environment.baseUrl + '/api/customers/';



  getCustomers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getCustomerById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  createCustomer(customer: Customer): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, customer);
  }

  updateCustomer(id: number, customer: Customer): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + customer.id, customer);
  }

  deleteCustomer(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}

import { Customer } from './customer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerRequest } from './customerRequest';

@Injectable()
export class CustomerService {

  private customersUrl: string;

  constructor(private http: HttpClient) {
    this.customersUrl = 'http://localhost:8060/v1/customers';
  }

  public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl);
  }

  public findCustomerById(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get<Customer>(url);
  }


  public save(customerRequest: CustomerRequest): Observable<CustomerRequest> {
    return this.http.post<CustomerRequest>(this.customersUrl, customerRequest);
  }

  public deleteCustomer(customerId: string) {
    const url = `${this.customersUrl}/${customerId}`;
    return this.http.delete(url);
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    const url = `${this.customersUrl}/${customer.id}`;
    return this.http.put<Customer>(url, customer);
  }



}

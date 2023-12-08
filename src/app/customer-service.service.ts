// import { LoginService } from './login.service';
// import { Customer } from './customer';
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { CustomerRequest } from './customerRequest';
// import { Page } from './page';
// import { map } from 'rxjs/operators';

// @Injectable()
// export class CustomerService {

//   private customersUrl: string;

//   constructor(private http: HttpClient, private loginService: LoginService) {
//     this.customersUrl = 'http://localhost:8080/v1/customers';
//   }

//   private getHeaders(): HttpHeaders {
//     const token = this.loginService.getToken();  // Get the token from your AuthService
//     return new HttpHeaders().set('Authorization', `Bearer ${token}`);
//   }

//   public count(): Observable<number> {
//     return this.http.get<Customer[]>(this.customersUrl, { headers: this.getHeaders() })
//       .pipe(
//         map(customers => {
//           // Log the number of customers
//           console.log(`Number of customers: ${customers.length}`);

//           // Return the number of customers
//           return customers.length;
//         })
//       );
//   }

//   public findCustomerById(id: number): Observable<Customer> {
//     const url = `${this.customersUrl}/${id}`;
//     return this.http.get<Customer>(url, { headers: this.getHeaders() });
//   }

//   public save(customerRequest: CustomerRequest): Observable<CustomerRequest> {
//     return this.http.post<CustomerRequest>(this.customersUrl, customerRequest, { headers: this.getHeaders() });
//   }

//   public deleteCustomer(customerId: string) {
//     const url = `${this.customersUrl}/${customerId}`;
//     return this.http.delete(url, { headers: this.getHeaders() });
//   }

//   public updateCustomer(customer: Customer): Observable<Customer> {
//     const url = `${this.customersUrl}/${customer.id}`;
//     return this.http.put<Customer>(url, customer, { headers: this.getHeaders() });
//   }

//   public getCustomersByPageWithSort(
//     offset: number,
//     pageSize: number,
//     field: string = 'firstName',
//     sort: string = 'ASC'
//   ): Observable<Page<Customer>> {
//     let params = new HttpParams()
//       .set('offset', offset.toString())
//       .set('pageSize', pageSize.toString())
//       .set('field', field.toString())
//       .set('sort', sort);
//       console.log("header"+this.getHeaders())
//     return this.http.get<Page<Customer>>(`${this.customersUrl}/byPageWithSort`, { headers: this.getHeaders(), params });
//   }
// }
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Customer } from './customer';
// import { Page } from './page';
// import { map } from 'rxjs/operators';
// import { CustomerRequest } from './customerRequest';
// import { LoginService } from './login.service';

// @Injectable()
// export class CustomerService {

//   private customersUrl: string;
//   private authToken: string;

//   constructor(private http: HttpClient, private loginService: LoginService) {
//     this.customersUrl = 'http://localhost:8080/v1/customers';
//     // this.authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJBRE1JTiIsIk1BTkFHRVIiLCJDVVNUT01FUiJdLCJzdWIiOiI1OWE1OGNiOS1lNjZhLTRlYjYtYmQ1YS05ZjQ4OTM3ODU5NWIiLCJpYXQiOjE3MDA2MTYwODUsImV4cCI6MTcwMDYxOTY4NX0.7mTu-JFhBReifdWdLF-Hz5L4ujUv4fcnavyNTh2mSnA'; // Replace with your actual authentication token
//     this.authToken = this.loginService.getToken();
//     console.log('Retrieved Token:', this.authToken);
//   }

//   private getRequestHeaders(): HttpHeaders {
//     return new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${this.authToken}`
//     });
//   }

//   public getCustomersByPageWithSort(
//     offset: number,
//     pageSize: number,
//     field: string = 'firstName',
//     sort: string = 'ASC'
//   ): Observable<Page<Customer>> {
//     let params = new HttpParams()
//       .set('offset', offset.toString())
//       .set('pageSize', pageSize.toString())
//       .set('field', field.toString())
//       .set('sort', sort);

//     // Use the headers option to include the authorization token
//     const options = {
//       headers: this.getRequestHeaders(),
//       params: params
//     };

//     return this.http.get<Page<Customer>>(`${this.customersUrl}/byPageWithSort`, options);
//   }

//   public deleteCustomer(customerId: string) {
//     const url = `${this.customersUrl}/${customerId}`;
//     return this.http.delete(url, { headers: this.getRequestHeaders() });
//   }

//   softDeleteCustomer(customerId: string): Observable<void> {
//     const url = `${this.customersUrl}/delete/${customerId}`;
//     return this.http.patch<void>(url, null, { headers: this.getRequestHeaders() });
//   }

//   public updateCustomer(customer: Customer): Observable<Customer> {
//     const url = `${this.customersUrl}/${customer.id}`;
//     return this.http.put<Customer>(url, customer, { headers: this.getRequestHeaders() });
//   }

//   // public search



//   public count(): Observable<number> {
//     return this.http.get<Customer[]>(this.customersUrl, { headers: this.getRequestHeaders() })
//       .pipe(
//         map(customers => {
//           // Log the number of customers
//           console.log(`Number of customers: ${customers.length}`);

//           // Return the number of customers
//           return customers.length;
//         })
//       );
//   }

//   public findCustomerById(id: number): Observable<Customer> {
//     const url = `${this.customersUrl}/user/${id}`;
//     return this.http.get<Customer>(url, { headers: this.getRequestHeaders() });
//   }

//   public save(customerRequest: CustomerRequest): Observable<CustomerRequest> {
//     return this.http.post<CustomerRequest>(this.customersUrl, customerRequest, { headers: this.getRequestHeaders() });
//   }
// }
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Page } from './page';
import { map } from 'rxjs/operators';
import { CustomerRequest } from './customerRequest';
import { LoginService } from './login.service';

@Injectable()
export class CustomerService {

  private customersUrl: string;
  private authToken: string;

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.customersUrl = 'http://localhost:8080/v1/customers';
    this.authToken = this.loginService.getToken();
    console.log('Retrieved Token:', this.authToken);
  }

  private getRequestHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
  }

  public fetchCustomersEvent: EventEmitter<void> = new EventEmitter<void>();

  fetchCustomers(): void {
    this.fetchCustomersEvent.emit();
  }

  public getCustomersByPageWithSort(
    offset: number,
    pageSize: number,
    field: string = 'firstName',
    sort: string = 'ASC'
  ): Observable<Page<Customer>> {
    let params = new HttpParams()
      .set('offset', offset.toString())
      .set('pageSize', pageSize.toString())
      .set('field', field.toString())
      .set('sort', sort);

    // Use the headers option to include the authorization token
    const options = {
      headers: this.getRequestHeaders(),
      params: params
    };

    return this.http.get<Page<Customer>>(`${this.customersUrl}/byPageWithSort`, options);
  }

  public searchCustomers(query: string, offset: number, pageSize: number, field: string, sort: string): Observable<Page<Customer>> {
    if (!["ASC", "DESC"].includes(sort)) {
      // Handle invalid sort values
      return new Observable<Page<Customer>>(); // You might want to handle this differently
    }

    let params = new HttpParams()
      .set('query', query)
      .set('offset', offset.toString())
      .set('pageSize', pageSize.toString())
      .set('field', field)
      .set('sort', sort);

    const options = {
      headers: this.getRequestHeaders(),
      params: params
    };

    return this.http.get<Page<Customer>>(`${this.customersUrl}/byPageWithQuery`, options);
  }

  public deleteCustomer(customerId: string) {
    const url = `${this.customersUrl}/${customerId}`;
    return this.http.delete(url, { headers: this.getRequestHeaders() });
  }

  softDeleteCustomer(customerId: string): Observable<void> {
    const url = `${this.customersUrl}/delete/${customerId}`;
    return this.http.patch<void>(url, null, { headers: this.getRequestHeaders() });
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    const url = `${this.customersUrl}/${customer.id}`;
    return this.http.put<Customer>(url, customer, { headers: this.getRequestHeaders() });
  }

  // Rest of the methods...

  // Search methods...
  public count(): Observable<number> {
    return this.http.get<Customer[]>(this.customersUrl, { headers: this.getRequestHeaders() })
      .pipe(
        map(customers => {
          // Log the number of customers
          console.log(`Number of customers: ${customers.length}`);

          // Return the number of customers
          return customers.length;
        })
      );
  }

  public findCustomerById(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/user/${id}`;
    return this.http.get<Customer>(url, { headers: this.getRequestHeaders() });
  }

  public save(customerRequest: CustomerRequest): Observable<CustomerRequest> {
    return this.http.post<CustomerRequest>(this.customersUrl, customerRequest, { headers: this.getRequestHeaders() });
  }
}

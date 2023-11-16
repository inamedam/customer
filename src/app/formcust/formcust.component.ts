import { Component } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer-service.service';
import { CustomerRequest } from '../customerRequest';

@Component({
  selector: 'app-formcust',
  templateUrl: './formcust.component.html',
  styleUrls: ['./formcust.component.css']
})
export class FormcustComponent {
  customer: Customer = new Customer();
  customerRequest: CustomerRequest = new CustomerRequest();

  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService) {
     this.customerRequest.password = 'password';
    this.customerRequest.validAccount = false;
    this.customerRequest.active = true;
  }

  onSubmit() {
    console.log(this.customerRequest)
    this.customerService.save(this.customerRequest).subscribe(
      (result) => {
        // Handle success (e.g., navigate to the list page)
        this.gotoCustomerList();
      },
      (error) => {
        // Handle error (e.g., display an error message to the user and log more details)
        console.error('Error while saving the customer:', error);
        if (error.status === 400) {
          console.error('Bad Request: JSON parsing issue');
          console.error('Error details:', error.error);
        }
      }
    );
  }

  gotoCustomerList() {
    this.router.navigate(['/v1/customers']);
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer-service.service';

@Component({
  selector: 'app-custcard',
  templateUrl: './custcard.component.html',
  styleUrls: ['./custcard.component.css']
})
export class CustcardComponent {
  customer: Customer = new Customer();

  constructor(private route: ActivatedRoute, private customerService: CustomerService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const customerId = params['id']; // '+' converts string to number
      this.customerService.findCustomerById(customerId).subscribe((customer) => {
        this.customer = customer;
      });
    });
  }
}

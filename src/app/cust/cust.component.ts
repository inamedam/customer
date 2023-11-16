import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer-service.service';

@Component({
  selector: 'app-cust',
  templateUrl: './cust.component.html',
  styleUrls: ['./cust.component.css']
})
export class CustComponent implements OnInit {
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

  navItems = [
    { label: 'Inbox', icon: 'inbox' },
    { label: 'Starred', icon: 'star' },
    { label: 'Send email', icon: 'send' },
    { label: 'Drafts', icon: 'drafts' }
  ];

  isDrawerOpen = false;

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}

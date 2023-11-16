
import { Component, Inject, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer-service.service';
import { ProfileComponent } from '../profile/profile.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
 selector: 'app-listcust',
 templateUrl: './listcust.component.html',
 styleUrls: ['./listcust.component.css']
})
export class ListcustComponent implements OnInit {

 customers: Customer[] = [];

 constructor(
    private customerService: CustomerService,
    public dialog: MatDialog) {

 }

 ngOnInit() {
    console.log(this.customers)

    this.customerService.findAll().subscribe((data: Customer[]) => {this.customers = data;});
 }


 deleteCustomer(customerId: string) {
    // Make an HTTP request to delete the customer
    this.customerService.deleteCustomer(customerId).subscribe(
      () => {
        // Remove the customer from the list
        this.customers = this.customers.filter(customer => customer.id !== customerId);
      },
      (error) => {
        console.error('Error deleting customer:', error);
      }
    );
 }

 openUpdateModal(customer: Customer) {

    const dialogRef = this.dialog.open(ProfileComponent, {
      data: { customer: customer }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
 }

}

import { Component, Inject } from '@angular/core';
import { Customer } from '../customer';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { EditableCustomer } from '../editable-customer';
import { CustomerService } from '../customer-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  customer: Customer; // Define a property to store the customer data

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { customer: Customer },
    public dialogRef: MatDialogRef<ProfileComponent>,
    private customerService: CustomerService
  ) {
    this.customer = data.customer; // Assign the customer data passed in as a parameter
  }

  dataSource: EditableCustomer[] = []; // Use the EditableCustomer interface
  displayedColumns: string[] = ['name', 'email', 'password'];

  showEditTooltip: { [key: string]: boolean } = {};

  // startEditing(propertyName: string) {
  //   this.dataSource.forEach((customer) => {
  //     customer['editing' + propertyName] = true;
  //   });
  // }

  // saveChanges(propertyName: string) {
  //   this.dataSource.forEach((customer) => {
  //     customer['editing' + propertyName] = false;
  //   });
  // }

  // cancelEditing(propertyName: string) {
  //   this.dataSource.forEach((customer) => {
  //     customer['editing' + propertyName] = false;
  //   });
  // }

  displayEditTooltip(propertyName: string) {
    this.showEditTooltip[propertyName] = true;
  }

  hideEditTooltip(propertyName: string) {
    this.showEditTooltip[propertyName] = false;
  }

  onSubmit(): void {
    // Call the updateCustomer method in your service
    this.customerService.updateCustomer(this.customer).subscribe(
      (result) => {
        // Handle success, e.g., show a success message or navigate to a list of customers
        console.log('Customer updated successfully.');
      },
      (error) => {
        // Handle error, e.g., display an error message
        console.error('Error updating customer:', error);
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

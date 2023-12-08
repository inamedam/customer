import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import { Page } from '../page';
import { PaginationService } from '../pagination.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subject, takeUntil } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


// ListcustComponent
// ... (imports)""

@Component({
  selector: 'app-listcust',
  templateUrl: './listcust.component.html',
  styleUrls: ['./listcust.component.css'],
})
export class ListcustComponent implements OnInit {


  hovering = false;
  customersPage: Page<Customer> = {
    content: [],
    totalElements: 0,
    totalPages: 0,
    number: 0,
    size: 5,
  };


  constructor(
    private cdr: ChangeDetectorRef,
    private customerService: CustomerService,
    public dialog: MatDialog,
    private paginationService: PaginationService,
    private notification: NzNotificationService,
    private snackBar: MatSnackBar

  ) {}

  ngOnInit(): void {
    this.subscribeToPaginationChanges();
    this.fetchCustomers();

    // Subscribe to the search result

  }

  // ... rest of the component


  private subscribeToPaginationChanges(): void {
    this.paginationService.getPageSizeObservable().subscribe((pageSize) => {
      this.customersPage.size = pageSize;
      console.log('Page size changed:', pageSize);
      this.fetchCustomers();
    });

    this.paginationService.getPaginationObservable().subscribe((pageIndex) => {
      this.customersPage.number = (pageIndex || 1) - 1;
      console.log('Page index changed:', pageIndex);
      this.fetchCustomers();
    });
  }

  private subscribeToSearchEvents(): void {
    this.customerService.fetchCustomersEvent.pipe().subscribe(() => {
      console.log('Search event received. Fetching customers...');
      this.fetchCustomers();
    });
  }

  fetchCustomers(): void {
    console.log('Fetching customers');
    this.customerService.getCustomersByPageWithSort(this.customersPage.number, this.customersPage.size)
      .subscribe(customersPage => {
        this.customersPage = customersPage;
        console.log('Fetched customers:', customersPage);
      });
  }

  deleteCustomer(customerId: string): void {
    this.customerService.deleteCustomer(customerId).subscribe(
      () => {
        this.customersPage.content = this.customersPage.content.filter(customer => customer.id !== customerId);
      },
      (error) => {
        console.error('Error deleting customer:', error);
      }
    );
  }

  deactivateCustomer(customerId: string): void {
    this.customerService.softDeleteCustomer(customerId).subscribe(
      () => {
        const deletedCustomerIndex = this.customersPage.content.findIndex(customer => customer.id === customerId);
        if (deletedCustomerIndex !== -1) {
          this.customersPage.content[deletedCustomerIndex].active = false;
          this.customersPage.content[deletedCustomerIndex].email = '#' + this.customersPage.content[deletedCustomerIndex].email;
          this.cdr.detectChanges();
        }
      },
      (error) => {
        console.error('Error deleting customer:', error);

        if (error.status === 409) {
          this.showConflictNotification();
        }
      }
    );
  }

  showConflictNotification(): void {
    this.notification.error('Conflict', 'Customer is already deactivated.', { nzDuration: 5000 });
  }

  openUpdateModal(customer: Customer): void {
    const dialogRef = this.dialog.open(ProfileComponent, {
      data: { customer: customer }
    });
    dialogRef.afterClosed().subscribe(result => {
      // Handle the result if needed
    });
  }

  //search for customers
  onSearch(event: Event): void {
    console.log('Search event triggered');
    const query = (event.target as HTMLInputElement).value;
    console.log(`Search query: "${query}"`);

    if (query.trim() !== '') {
      this.customerService
        .searchCustomers(query, this.customersPage.number, this.customersPage.size, 'firstName', 'ASC')
        .subscribe(
          (result) => {

            // this.paginationService.updatePageIndex(result.number + 1);
            // this.paginationService.updatePageSize(result.size);

            this.customersPage = result;
            console.log('Search result:', result);
          },
          (error) => {
            console.error('Error searching:', error);
          }
        );
    } else {
      // If the search query is empty, fetch all customers
      this.fetchCustomers();
    }
  }


  // this.snackBar.open(message, 'Close');

}

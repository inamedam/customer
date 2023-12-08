import { ChangeDetectionStrategy, Component, NgZone, OnInit } from '@angular/core';
import { CustomerService } from '../customer-service.service';
import { Customer } from '../customer';
import { Page } from '../page';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'nz-demo-pagination-changer',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <nz-pagination
      [nzPageIndex]="currentPageIndex"
      [nzTotal]="totalItems"
      nzShowSizeChanger
      [nzPageSize]="pageSize"
      (nzPageIndexChange)="onPageIndexChange($event)"
      (nzPageSizeChange)="onPageSizeChange($event)"
    ></nz-pagination>

    <!-- <div>
      <p>Current Page Index: {{ currentPageIndex }}</p>
      <p>Page Size: {{ pageSize }}</p>
      <p>Total Items: {{ totalItems }}</p>
    </div> -->
  `
})
export class NzDemoPaginationChangerComponent implements OnInit {
  currentPageIndex = 0;
  totalItems = 0;
  pageSize = 5;
  customersPage: Page<Customer> = { content: [], totalElements: 0, totalPages: 0, number: 0, size: 0 };
 backendPageIndex =0;

  constructor(private customerService: CustomerService, private zone: NgZone, private paginationService: PaginationService) {
      }

  ngOnInit(): void {
    this.currentPageIndex = 0;
    this.fetchCustomers();
    console.log("Fetching customers...");
  }



  onPageIndexChange(pageIndex: number): void {
  this.backendPageIndex = pageIndex;
  console.log('Page index changing to:', this.backendPageIndex);
  this.currentPageIndex = pageIndex;
  this.paginationService.updatePageIndex(this.backendPageIndex);
  console.log('Page index changed to:', pageIndex);
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.paginationService.updatePageSize(pageSize);
    this.currentPageIndex = 0;
    this.fetchCustomers();
    console.log('Page size changed to:', pageSize);
  }

  private fetchCustomers(): void {
    this.customerService.getCustomersByPageWithSort(this.currentPageIndex, this.pageSize)
      .subscribe(customersPage => {
        this.zone.run(() => {
          this.customersPage = customersPage;
          this.totalItems = customersPage.totalElements;
        });
        console.log('Page data fetched successfully:', customersPage);
      }, error => {
        console.error('Error fetching page data:', error);
      });
  }
}

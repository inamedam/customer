import { LoginService } from './../login.service';
import { CustomerService } from './../customer-service.service';
import { ChangeDetectorRef, Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Customer } from '../customer';
import { Page } from '../page';
import { SearchService } from '../search.service';

// NzDemoInputSearchInputComponent
// ... (imports)
@Component({
  selector: 'nz-demo-input-search-input',
  template: `
    <nz-input-group [nzSuffix]="suffixIconSearch">
      <input
        type="text"
        nz-input
        placeholder="input search text"
        (input)="onSearch($event)"
      />
    </nz-input-group>
    <ng-template #suffixIconSearch>
      <span nz-icon nzType="search"></span>
    </ng-template>
  `,
  styles: [
    `
      nz-input-group {
        margin-bottom: 5px;
        width: 200px;
      }

      input,
      button {
        height: 100%;
      }
    `,
  ],
})
export class NzDemoInputSearchInputComponent {
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
    private searchService: SearchService // Don't forget to inject SearchService
  ) {}

  onSearch(event: Event): void {
    console.log('Search event triggered');
    const query = (event.target as HTMLInputElement).value;
    this.searchService.setQuery(query); // Update the query in the service

    console.log(`Search query: "${query}"`);

    // Use this.searchService.isSearching() to check if a search is in progress
    if (!this.searchService.isSearching()) {
      console.log(`Search query is empty. Fetching all customers...`);
      this.fetchCustomers(); // Fetch all customers when the search query is empty
      return;
    }

    this.customerService
      .searchCustomers(query, 0, 10, 'firstName', 'ASC')
      .subscribe(
        (result) => {
          this.customersPage = result;
          console.log('Search result:', result);
          this.searchService.setSearchResult(result); // Update the search result in the service
        },
        (error) => {
          console.error('Error searching:', error);
        }
      );
  }

  fetchCustomers(): void {
    console.log('Fetching all customers');
    this.customerService.getCustomersByPageWithSort(this.customersPage.number, this.customersPage.size)
      .subscribe(customersPage => {
        this.customersPage = customersPage;
        console.log('Fetched all customers:', customersPage);
        this.cdr.detectChanges(); // Ensure change detection is triggered
      });
  }
}

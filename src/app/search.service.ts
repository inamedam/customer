// search.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchResultSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  private querySubject: BehaviorSubject<string> = new BehaviorSubject('');

  setSearchResult(result: any): void {
    this.searchResultSubject.next(result);
  }

  getSearchResult(): Observable<any> {
    return this.searchResultSubject.asObservable();
  }

  setQuery(query: string): void {
    this.querySubject.next(query);
  }

  getQuery(): string {
    return this.querySubject.value;
  }

  isSearching(): boolean {
    return !!this.querySubject.value.trim();
  }
}


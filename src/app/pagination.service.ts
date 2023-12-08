import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  private pageIndexSubject = new BehaviorSubject<number>(0);
  private pageSizeSubject = new BehaviorSubject<number>(5); // Set your default page size here

  updatePageIndex(pageIndex: number): void {
    this.pageIndexSubject.next(pageIndex);
  }

  updatePageSize(pageSize: number): void {
    this.pageSizeSubject.next(pageSize);
  }

  getPaginationObservable(): Observable<number> {
    return this.pageIndexSubject.asObservable();
  }

  getPageSizeObservable(): Observable<number> {
    return this.pageSizeSubject.asObservable();
  }

  getPageSize(): number {
    return this.pageSizeSubject.value;
  }
}

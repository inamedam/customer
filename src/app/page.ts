export interface Page<T> {
  content: T[];       // Array of items on the current page
  totalElements: number;  // Total number of items in all pages
  totalPages: number;     // Total number of pages
  number: number;         // Current page number
  size: number;           // Number of items on each page


}

// dark-mode.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private isDarkMode = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.updateDarkMode();
  }

  private updateDarkMode(): void {
    if (this.isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  // private isDarkMode = false;

  // toggleDarkMode(): void {
  //   this.isDarkMode = !this.isDarkMode;
  //   this.updateDarkMode();
  // }

  // private updateDarkMode(): void {
  //   document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  // }



}

import { Component } from '@angular/core';
import { DarkModeService } from './dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'angular-customer';
  constructor(private darkModeService: DarkModeService) {}

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
    console.log("Toggling dark mode");
  }

  backgroundColor = '#ffffff';

  changeBackgroundColor(): void {
    // Generate a random hex color for demonstration purposes
    this.backgroundColor = this.getRandomHexColor();
  }

  private getRandomHexColor(): string {
    // Generate a random hex color (e.g., #aabbcc)
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  isActive: boolean = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }
}

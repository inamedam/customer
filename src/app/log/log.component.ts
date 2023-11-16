import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogRequest } from '../logRequest';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {

  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {
    console.log("inside login component constructor");
  }

  login(): void {
    console.log("inside login component methode");
    this.loginService.login(this.username, this.password)
      .subscribe(
        (data) => {
          // Assuming the token is returned in the 'data' object
          const token = data.token;
          console.log(token);
          // Save the token in a secure way (e.g., localStorage or a cookie)
          this.loginService.setToken(token);
          // Redirect or perform additional actions as needed
        },
        (error) => {
          if (error.status === 401) {
            console.error('Authentication failed: Invalid credentials');
            // Handle unauthorized access, e.g., redirect to login page
        } else {
            console.error('Login failed:', error);
            // Log the full error object for more details
        }
          // Handle login failure, display error message, etc.
        }
      );
  }

  hidePassword: boolean = true;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
}

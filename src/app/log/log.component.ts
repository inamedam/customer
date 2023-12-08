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

  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router) {
    console.log("inside login component constructor");
  }

  login(): void {
    console.log("inside login component method");
    this.loginService.login(this.username, this.password)
      .subscribe(
        (data) => {
          // Check the structure of your response to access the token correctly
          const token = data.data.token; // Adjust this based on your actual response structure
          console.log(token);
          this.loginService.setToken(token);

          this.router.navigate(['/customers']);
        },
        (error) => {
          if (error.status === 401) {
            console.error('Authentication failed: Invalid credentials');
          } else {
            console.error('Login failed:', error);
          }
          // Handle login failure, display an error message, etc.
        }
      );
  }


  hidePassword: boolean = true;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
}

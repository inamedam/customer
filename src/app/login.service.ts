import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/v1/users/login';
  private token: string = '';
  isAuthenticated: boolean = true;

  constructor(private http: HttpClient ,private router: Router) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    console.log('Request body:', body);

    // Making the login request
    return this.http.post(this.apiUrl, body).pipe(
      // Log the response (including the token) using the tap operator
      tap((response: any) => {
        console.log('Login response:', response);
        if (response && response.data && response.data.token) {
          // Correct the path to access the token property
          this.setToken(response.data.token);
        }
      })
    );
  }


  setToken(token: string): void {
    this.token = token;
    // Save the token securely (e.g., localStorage or a cookie)
    localStorage.setItem('token', token);
    console.log('Token saved inside set token:', token);
  }

  getToken(): string {
    // Retrieve the token securely (e.g., localStorage or a cookie)

    return localStorage.getItem('token') || '';
    console.log('Token saved inside get token:', localStorage.getItem('token'));

  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
    console.log('Logged out');
    this.router.navigate(['/login']); // Navigate to the login page
  }

  }




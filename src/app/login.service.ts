import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/v1/users/login';
  private token: string = '';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    console.log('Request body:', body);

    // Making the login request
    return this.http.post(this.apiUrl, body).pipe(
      // Log the response (including the token) using the tap operator
      tap((response: any) => {
        console.log('Login response:', response);
        if (response && response.data && response.data.token) {
          // Assuming the token is available in the 'data.token' property of the response
          this.setToken(response.data.token);
        }
      })
    );
  }

  setToken(token: string): void {
    this.token = token;
    // Save the token securely (e.g., localStorage or a cookie)
    localStorage.setItem('token', token);
    console.log('Token saved:', token);
  }

  getToken(): string {
    // Retrieve the token securely (e.g., localStorage or a cookie)
    return localStorage.getItem('token') || '';
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data): Observable<any> {
    return this.http.post(environment.api + 'auth/users/', data);
    // return this.http.get(environment.api + 'login.php', { params: params });
  }

  signUp(data): Observable<any> {
    return this.http.post(environment.api + 'auth/users/create', data);
  }

  getToken(): string {
    return localStorage.getItem('mservice_tok');
  }

  removeToken(): void {
    return localStorage.removeItem('mservice_tok');
  }

  signOut(): Observable<any> {
    let obj = { token: this.getToken() };
    return this.http.post(environment.api + 'auth/users/signout', obj);
  }
}

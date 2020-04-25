import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data): Observable<any> {
    let params = new HttpParams();
    params = params.append('email', data.email);
    params = params.append('pass', data.password);
    return this.http.get(environment.api + 'login/' + data.email);
    // return this.http.get(environment.api + 'login.php', { params: params });
  }
  
  signUp(data): Observable<any> {
    let params = new HttpParams();
    params = params.append('name', data.name);
    params = params.append('lastName', data.lastName);
    params = params.append('email', data.email);
    params = params.append('serviceName', data.serviceName);
    params = params.append('country', data.country);
    return this.http.get(environment.api + 'signup.php', { params: params });
  }

  getToken(): string {
    return localStorage.getItem('service_token')
  }
}

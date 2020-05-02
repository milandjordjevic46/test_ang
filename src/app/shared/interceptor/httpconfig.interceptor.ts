import { Injectable } from '@angular/core';
// import { ErrorDialogService } from '../error-dialog/errordialog.service';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor(private auth_service: AuthService, private router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //how to update the request Parameters
    //logging the updated Parameters to browser's console
    const updatedRequest = request.clone({
      setHeaders: {
        Authorization: `${this.auth_service.getToken()}`,
        'Content-Type': 'application/json',
        Accept: 'application/json;charset=UTF-8',
      },
    });
    return next.handle(updatedRequest).pipe(
      tap(
        (event) => {
          //logging the http response to browser's console in case of a success
          console.log('api call success :', event);
        },
        (error) => {
          //logging the http response to browser's console in case of a failuer
          if (error.status === 401 && error.statusText == 'Unauthorized') {
            this.auth_service.removeToken();
            this.router.navigate(['login']);
            console.log(error);
          }
        }
      )
    );
  }
}

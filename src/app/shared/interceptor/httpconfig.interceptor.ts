import { Injectable } from '@angular/core';
// import { ErrorDialogService } from '../error-dialog/errordialog.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    constructor(private auth_service: AuthService) { }
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      //how to update the request Parameters
      //logging the updated Parameters to browser's console
    //     const updatedRequest = request.clone({
    //         setHeaders: {
    //             Authorization: `AAAA${this.auth_service.getToken()}`
    //           }
    //     // headers: request.headers.set("Authorization", "MILANN")
    //   });
    //     console.log("Before making api call : ", updatedRequest);
      return next.handle(request).pipe(
        tap(
          event => {
            //logging the http response to browser's console in case of a success
            if (event instanceof HttpResponse) {
              console.log("api call success :", event);
            }
          },
          error => {
            //logging the http response to browser's console in case of a failuer
            if (event instanceof HttpResponse) {
                console.log("api call error :", event);
                if (event.status === 505) {
                    alert('not logged');
                }
            }
          }
        )
      );
    }
  }
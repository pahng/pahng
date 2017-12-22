import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // This is here to show how we can inject authentication headers on every request
        // but it currently doesn't do anything. It just passes the request through to the next
        // interceptor in the chain.

        // Get the auth header from the service.
        // const authHeader = this.auth.authHeader;
        // Clone the request to add the new header.
        // const authRequest = request.clone({ headers: request.headers.set('Authorization', authHeader) });
        return next.handle(request);
    }

}

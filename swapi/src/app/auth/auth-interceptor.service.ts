import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService {
    constructor(private authServerice: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
this.authServerice.user.subscribe();
    }
}
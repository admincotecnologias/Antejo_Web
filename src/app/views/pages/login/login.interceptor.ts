import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    try{
        let token = localStorage.getItem('auth_token');
        const authReq = req.clone({
            headers: req.headers.set('Content-type', 'application/json')
                .set('token', token != null ? token : "")
        });
        return next.handle(authReq);
    }catch (ex){
      console.log(ex)
    }
  }
}

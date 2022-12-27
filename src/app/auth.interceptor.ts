import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CegasaService } from './services/cegasa.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private cegasa:CegasaService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //Recogo el token almacenado
    let token: any = localStorage.getItem('tokenUser');
    //Si existe el token agrego el mismo a las siguientes llamadas
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    }
    return next.handle(request);
  }
}

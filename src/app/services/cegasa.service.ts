import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CegasaService {

  public url:string = 'https://calculator.cegasa.com/API/';

  public getLoggedUser: any;
  private loggedUserSubject: BehaviorSubject<unknown>;
  public loggedInUser: Observable<unknown>;

  constructor(private conector: HttpClient, private router: Router) {
    this.getLoggedUser = localStorage.getItem('tokenUser');
    this.loggedUserSubject = new BehaviorSubject(this.getLoggedUser);
    this.loggedInUser = this.loggedUserSubject.asObservable();
   }

  public login(usuario:Usuario) {
    console.log(usuario);
    
    return this.conector.post<any>(this.url + 'login', usuario)
      .pipe(map(response => {
        
        if (response.token.token) {
          localStorage.setItem('tokenUser', response.token.token);
          console.log(response.token.token);
          this.loggedUserSubject.next(response);  
          this.router.navigate(['/'])
        }
              
        return response;
      }));;
  }  
  
  logoutUser() {
    localStorage.removeItem('tokenUser');
    this.loggedUserSubject.next(null);
  }
}

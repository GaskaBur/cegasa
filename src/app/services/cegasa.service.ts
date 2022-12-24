import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CegasaService {

  public url:string = 'https://calculator.cegasa.com/API/';

  constructor(private conector: HttpClient) { }

  public login(usuario:any) {
    return this.conector.post(this.url + 'login', JSON.stringify(usuario));
  }
}

import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { CegasaService } from '../../services/cegasa.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:Usuario = new Usuario('','');
  u:string = '';

  constructor(private cegasa:CegasaService) {

  }
  
  ngOnInit(): void {
  }

  public submitLogin() {
    this.cegasa.login(this.usuario).subscribe((result: any) => {
      console.log(result)
    });    
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ebick } from 'src/app/models/ebick';
import { CegasaService } from 'src/app/services/cegasa.service';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  ebick: Ebick = new Ebick;
  respuesta:Object= {};

  constructor(private cegasa: CegasaService, private router:Router) { }

  ngOnInit(): void {
    let token: any = localStorage.getItem('tokenUser');
    //Si existe el token agrego el mismo a las siguientes llamadas
    if (!token) {
      this.router.navigate(['/login'])
    }
  }

  logout() {
    alert('cerrar');
    this.cegasa.logoutUser();

  }
  calculate() {
    console.log(this.ebick);
    
    this.cegasa.calculate(this.ebick).subscribe((result: any) => {
      console.log(result)
      this.respuesta = result;
    });  
  }

}

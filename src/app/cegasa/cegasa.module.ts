import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';



@NgModule({
  declarations: [
    LoginComponent,
    CalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    LoginComponent,
    CalculadoraComponent
  ]
})
export class CegasaModule { }

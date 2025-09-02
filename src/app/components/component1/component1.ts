import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component1',
  imports: [FormsModule, CommonModule],
  templateUrl: './component1.html',
  styleUrl: './component1.css'
})
export class Component1 {
  peso:number = 0;
  altura:number = 0;
  mostrarElemento = false;

  calcularIMC(peso:number, altura:number) {
    var imc = peso / (altura * altura);
    return imc;
  }

  alternarElemento(){
    this.mostrarElemento = !this.mostrarElemento;
  }
}

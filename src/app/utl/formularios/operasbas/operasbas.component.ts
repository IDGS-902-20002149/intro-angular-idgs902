import { Component } from '@angular/core';

@Component({
  selector: 'app-operasbas',
  templateUrl: './operasbas.component.html',
  styleUrls: ['./operasbas.component.css']
})

export class OperasbasComponent {
  n1!:number;
  n2!:number;
  res!:number;

  operacionSeleccionada:string = 'suma';

  tipoOperaciones=[
    'suma',
    'resta',
    'multiplicacion',
    'divicion'
  ]

  calcular() {
    switch (this.operacionSeleccionada) {
      case 'suma': this.res = this.n1 + this.n2;
        break;        
      case 'resta': this.res = this.n1 - this.n2;
        break;        
      case 'multiplicacion': this.res = this.n1 * this.n2;
        break;        
      case 'divicion': this.res = this.n1 / this.n2;
        break;          
    }
  }
}

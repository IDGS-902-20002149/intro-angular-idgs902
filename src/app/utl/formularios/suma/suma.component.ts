import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css'],
})
export class SumaComponent {
  
  num1:number = 0;
  num2:number = 0;
  opc:string = '1';
  result:number = 0

  operaciones(n1: number, n2: number, opc: string) {
    switch (opc) {
      case '1':
        this.result = n1 + n2;
        break;
      case '2':
        this.result = n1 - n2;
        break;
      case '3':
        this.result = n1 * n2;
        break;
      case '4':
        this.result = n1 / n2;
        break;
      default:
        break;
    }
  }
}

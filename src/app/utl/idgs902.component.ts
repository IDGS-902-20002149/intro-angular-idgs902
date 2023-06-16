import { Component } from '@angular/core';
@Component({
  selector: 'app-idgs902',
  template: `
    <div class="card">
      <div class="card-header">
        <h2>Matricula: {{ alumno2.matricula }}</h2>
      </div>
      <div class="card-body">
        <h2>Nombre: {{alumno2.nombre}}</h2>
        <h2>Apellido Parterno: {{alumno2.aparterno}}</h2>
        <h2>Inscrito: {{alumno2.inscrito}}</h2>
        <h2>Fecha Nacimiento: {{alumno2.fechaNacimiento | date}}</h2>
      </div>
    </div>
  `,
})
export class Idgs902 {
  alumno2 = {
    matricula: 20002149,
    nombre: 'Luis German',
    aparterno: 'Vargas',
    inscrito: 'obvio',
    fechaNacimiento: new Date("09-15-2001"),
  };
}

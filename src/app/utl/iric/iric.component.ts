import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {
  //Binding properties
  imageWidth:number = 50;
  imageMargin:number = 2;

  //Event properties
  muestraImg:boolean=true;
  listfilter:string='';
  alumnoTitle!:string

  showImage(){
    this.muestraImg = !this.muestraImg;
  };


  alumnosIric:IAlumnosIric[] = [
    {
      matricula:1234,
      nombre: 'Pedro',
      edad: 23,
      correo: 'pedro@gmail.com',
      foto: 'https://img.wattpad.com/cover/270106124-288-k461693.jpg',
      calificacion: 6.7
    },
    {
      matricula:772,
      nombre: 'Paulina',
      edad: 23,
      correo: 'paulina@gmail.com',
      foto: 'https://filosofiaparaelsigloxxi.files.wordpress.com/2021/05/tamara.png',
      calificacion: 4.3
    },
    {
      matricula:342,
      nombre: 'Dario',
      edad: 27,
      correo: 'dario@gmail.com',
      foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80',
      calificacion: 2.2
    },

  ];

  onCalificaClick(message:string){
    this.alumnoTitle = `${message}`
  }
}

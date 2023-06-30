import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoReactiveComponent } from './utl/formularios/alumno-reactive/alumno-reactive.component';
import { IricComponent } from './utl/iric/iric.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'AltaAlum', component: AlumnoReactiveComponent},
  {path:'Irik', component: IricComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

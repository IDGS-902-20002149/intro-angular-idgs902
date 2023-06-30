import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameGrupo } from './utl/grupos.component';
import { Idgs902 } from './utl/idgs902.component';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './utl/formularios/operas/operas.module';
import { DospuntosModule } from './actividades/actividad1/dospuntos/dospuntos.module';
import { ResistenciasComponent } from './actividades/actividad2/resistencias/resistencias.component';
import { CalificacionAlumComponent } from './utl/calificacion-alum/calificacion-alum.component';
import { AlumnoFilterPipe } from './utl/alumno-filter.pipe';
import { AlumnoReactiveComponent } from './utl/formularios/alumno-reactive/alumno-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    NameGrupo,
    Idgs902,
    IdgsComponent,
    IricComponent,
    MenuComponent,
    SumaComponent,
    ResistenciasComponent,
    CalificacionAlumComponent,
    AlumnoFilterPipe,
    AlumnoReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    DospuntosModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

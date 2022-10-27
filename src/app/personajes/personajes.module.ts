import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './pages/listado/listado.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ListadoComponent,
    DetalleComponent
  ],
  exports: [
    ListadoComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PersonajesModule { }

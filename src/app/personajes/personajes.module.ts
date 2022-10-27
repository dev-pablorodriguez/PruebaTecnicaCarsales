import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './pages/listado/listado.component';
import { DetalleComponent } from './pages/detalle/detalle.component';



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
    CommonModule
  ]
})
export class PersonajesModule { }

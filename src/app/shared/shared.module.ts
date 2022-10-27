import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ContainerComponent
  ],
  exports: [
    SidebarComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

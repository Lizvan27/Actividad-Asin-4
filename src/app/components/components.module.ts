import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoComponent } from './contenido/contenido.component';
import { ParteComponent } from './parte/parte.component';



@NgModule({
  declarations: [
    ContenidoComponent,
    ParteComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContenidoComponent,
    ParteComponent
  ]
})
export class ComponentsModule { }

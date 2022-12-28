import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './titulo/titulo.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    TituloComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TituloComponent,
    FooterComponent
  ]
})
export class PagesModule { }

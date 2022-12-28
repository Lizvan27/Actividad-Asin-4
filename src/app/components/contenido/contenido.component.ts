import { outputAst } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {
  parrafo: String = "Entonces, ¿qué es Angular? Es un framework de ingeniería de software de código abierto que se utiliza para crear aplicaciones web de una sola página. Los desarrolladores también lo utilizan para crear menús animados para páginas web HTML"
}

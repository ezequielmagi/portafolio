import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public infoPaginaService: InfoPaginaService) {
    //Leer el archivo JSON y tomar sus propiedades
    //necesitamos un modulo que permita hacer peticiones http
    //para eso debemos ir a los imports dentro de app.module.ts
  }
}

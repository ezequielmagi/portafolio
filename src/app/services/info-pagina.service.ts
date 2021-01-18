import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina;
  cargada: boolean = false;

  constructor(private http: HttpClient) {
    //console.log('Servicio de infoPagina listo');
    //podemos conectarnos a servidores externos
    //para leer el archivo JSON, agregamos lo siguiente:
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
      });
  }
}

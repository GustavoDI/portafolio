import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info : InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) { 
    console.log('Servicio de infoPagina listo');

    //leer el archivo
    this.cargarInfo();
    this.cargarEquipo();
  }

  //metodos carga desde firebase
  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) =>{
        this.cargada = true;
        this.info=resp;
          
        });
  }

  private cargarEquipo() {
    this.http.get('https://angular-portfolio-81ea5-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: any) =>{
        
        this.equipo = resp;
          console.log(resp)
        });
  }
}


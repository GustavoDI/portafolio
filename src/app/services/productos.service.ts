import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargado = true;
  
  constructor( private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){
    this.http.get('https://angular-portfolio-81ea5-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: any) => {
        console.log(resp);
        this.cargado = false;
    });

  };

};

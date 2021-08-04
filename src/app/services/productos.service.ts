import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){
    this.http.get('https://angular-portfolio-81ea5-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp:any) =>{
      console.log(resp);
    })

  }

}

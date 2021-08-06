import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargado = true;
  productos : Producto[] = [];
  productosFiltrado: Producto[] = []; //Recordar que esto viene desde la interface
  
  constructor( private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){
    
    this.http.get('https://angular-portfolio-81ea5-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: any) => {
        // console.log(resp);
        this.productos = resp;
        this.cargado = false;
    });

  };
  getProducto(id: string){
    return this.http.get(`https://angular-portfolio-81ea5-default-rtdb.firebaseio.com/productos/${id}.json`);
  };

  buscarProducto(termino: string){

    if (this.productos.length === 0){
      //cargar productos
      this.cargarProductos();
      this.filtrarProductos(termino);
    }else{
      //aplicar filtro
      this.filtrarProductos(termino);
    };
    this.productosFiltrado = this.productos.filter(producto =>{
      return true;
    });
    // console.log(this.productosFiltrado);

  };
  private filtrarProductos(termino: string){
    // console.log(this.productos);
    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf(termino )>=0 || tituloLower.indexOf(termino)>=0) {
        this.productosFiltrado.push(prod);
      }
    })
  };

};

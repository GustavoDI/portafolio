import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoCompleto } from '../../interfaces/producto-descrip.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  producto: ProductoCompleto | undefined;
  id:any[]=[];

  constructor( private route: ActivatedRoute,
               private productoService: ProductosService) { }

  ngOnInit(): void {
    // aqui normalmente se llama la instruccion
    this.route.params
      .subscribe(parametros =>{
        console.log(parametros ['id']);
        this.productoService.getProducto(parametros['id'])
          .subscribe( (producto : any) => {
            this.id = parametros['id'];
            console.log(producto);
            this.producto = producto;
          });

      });
  };

}

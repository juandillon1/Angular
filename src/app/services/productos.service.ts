import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  sinresultados = 0;
  cargando = true;
  productos: ProductoInterface[] = [];
  filtroProducto: ProductoInterface[] = [];
  constructor(private http: HttpClient ) {
    this.cargarProductos();
   }
  private cargarProductos() {
    return new Promise( ( resolve, reject ) => {
      this.http.get('https://ludiar-96775.firebaseio.com/productos_idx.json')
      .subscribe( (resp: ProductoInterface[]) => {
        this.cargando = false;
        this.productos = resp;
        resolve();
      });
    });
  }
  public getProductos(id: string) {
    return this.http.get(`https://ludiar-96775.firebaseio.com/productos/${ id }.json`);
  }
  public buscarProducto(termino: string)  {
    if (this.productos.length === 0) {
      this.cargarProductos().then( () => {
        this.filtrarproductos( termino );
      } );
    } else {
      this.filtrarproductos( termino );
    }
    /*this.filtroProducto = this.productos.filter( producto => {
      return true;
    } );*/
  }
  private filtrarproductos(termino: string) {
    this.sinresultados = 0;
    this.filtroProducto = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach( prod => {
      const titulotolower = prod.titulo.toLocaleLowerCase();
      if (!prod.categoria.indexOf( termino ) || !titulotolower.indexOf( termino )) {
        this.filtroProducto.push( prod );
        this.sinresultados = 1;
      }
    });
  }
}

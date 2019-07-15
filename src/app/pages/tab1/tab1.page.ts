import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( private productosServices: ProductosService) {}

  ngOnInit(){

    this.productosServices.getPosts()
      .subscribe( resp =>{
        console.log(resp);
      });
  }

}

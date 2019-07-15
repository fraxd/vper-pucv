import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http: HttpClient ) { }

  paginaPosts = 0;

  getPosts(){

    this.paginaPosts ++;

    console.log(this.http.get(`${URL}/productos?pagina=${this.paginaPosts}`));
    return this.http.get(`${URL}/productos?pagina=${this.paginaPosts}`);
  }



  
}

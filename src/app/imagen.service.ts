import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private http: HttpClient) { }

  saveImage(nombre : any, imagen : any){
    let datos = new FormData();
    datos.append('nombre', nombre);
    datos.append('imagen', imagen);
    return this.http.post('http://18.220.167.194/api/persona', datos);
  }
}

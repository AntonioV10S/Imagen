import { ImagenService } from './../imagen.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private img: ImagenService) {}

  imagen: any;

  obtenerImagen(dato: any) {

    this.imagen = dato.target.files[0];

  }

  storageImage(nombre: any) {
    this.img.saveImage(nombre.value, this.imagen).subscribe({
      next: (data : any) => {
        console.log(data);
        location.reload();
      },
      error: (error: any) => {
        console.log(error);
      },
    });

  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {

  public nombre_Prenda = 'Pantalones vaqueros';
  public colleccion_ropa = ['Pantalones blanco', 'Camiseta roja'];
  constructor() { }

  prueba(nombre_Prenda) {
    return nombre_Prenda;
  }

  addRopa(nombre_Prenda: string): Array<string> {
    this.colleccion_ropa.push(nombre_Prenda);
    return this.getRopa();
  }

  getRopa():Array<string> {
    return this.colleccion_ropa;
  }

  removeRopa(indice:number):Array<string>{
    this.colleccion_ropa.splice(indice,1);
    return this.getRopa();
  }
}

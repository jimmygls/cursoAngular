import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
  
  public nombrePrenda = 'Pantalones vaqueros';
  
  constructor() { }
  
  prueba(nombre_Prenda) {
    return nombre_Prenda;
  }
}

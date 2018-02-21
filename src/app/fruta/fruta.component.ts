import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent implements OnInit {

  public titulofruta;
  public listafrutas;
  public edad: number = 55;
  public nombre: string = 'Jimmy Guevara';
  public aficios: Array<string> = ['lavo', 'plancho', 'saco el perro'];

  constructor() {
    console.log(this.aficios)
    this.titulofruta = 'Componente de frutas';
    this.listafrutas = 'naranjas, patillas, peras';
    this.edad = 55;
    this.nombre = 'Jimmy Guevara';
    this.aficios = ['lavo', 'plancho', 'saco el perro'];
    
  }

  ngOnInit() {
    this.cambiarnombre();
    this.cambiaredad(37);
    alert(this.nombre +"-"+ this.edad);
  }

  cambiarnombre() {
    this.nombre='gls';

  }

  cambiaredad(edad) {
    this.edad=edad;
  }
}

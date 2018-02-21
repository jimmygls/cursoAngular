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
    console.log(this.nombre + "-" + this.edad);
    //varibales y alcance
    // la variable let actua a nivel de bloque es decir dentro del if
    // La variable var actua de forma global 
    var uno = 8;
    var dos = 15;
    if (uno === 8) {
      let uno = 3;
      var dos = 88;
      console.log("Entro al if uno " + uno);
      console.log("Entro al if dos " + dos);
    }
    console.log("Fuera al if uno " + uno);
    console.log("Fuera al if dos " + dos);
  }

  cambiarnombre() {
    this.nombre = 'gls';

  }

  cambiaredad(edad) {
    this.edad = edad;
  }
}

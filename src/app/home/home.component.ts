import { Component, OnInit } from '@angular/core';
import { RopaService } from '../servicios/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {
  public titulo = 'Pagina Principal'
  public listado_ropa: Array<string>;
  public prenda_a_guardar: string;
  public fecha;

  //se inyecta el servicio
  constructor(private _ropaService: RopaService) {
    this.fecha=new Date(2017,4,15);
  }

  ngOnInit() {
    this.listado_ropa = this._ropaService.getRopa();
    console.log(this.listado_ropa);
    this.fecha=new Date(2017,4,15);
  }

  guardarPrenda() {
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = null;
  }

  eliminarPrenda(indice: number) {
    this._ropaService.removeRopa(indice);
  }

}

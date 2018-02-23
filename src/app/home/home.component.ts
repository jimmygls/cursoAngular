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
  
  //se inyecta el servicio
  constructor(private _ropaService: RopaService) {
  }

  ngOnInit() {
    console.log(this._ropaService.prueba('camiseta nike'));
  }

}

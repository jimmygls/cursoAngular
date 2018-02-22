import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public titulos= 'Pagina de contacto';;
  public parametro;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }
  //no me permite salir por medio de una fucion normal, se debe hacer con la funcion flecha
  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.parametro = params['page'];
      console.log("parametro " + this.parametro);
    });
  }
}

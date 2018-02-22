import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  public tituloEmpleado = 'Componente Empleados:';
  public empleado: Empleado;
  public trabajadores: Array<Empleado>;
  public trabajador_externo: boolean;
  public color:string;

  constructor() {
    this.empleado = new Empleado('Jimmy', 37, 'Desa', true);
    this.trabajadores = [
      new Empleado('Jimmy', 37, 'Desa', true),
      new Empleado('Pedro', 35, 'Prue', false),
      new Empleado('Marco', 27, 'Lid', true),
      new Empleado('Jose', 47, 'Adm', true)
    ];
    this.trabajador_externo = true;
    this.color='green';
  }

  ngOnInit() {
    console.log(this.empleado);
    console.log(this.trabajadores);
  }

  cambiarTrabajadorExterno(valor) {
    this.trabajador_externo = valor;
  }

}

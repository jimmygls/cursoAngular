import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadosComponent } from '../empleados/empleados.component';
import { FrutaComponent } from '../fruta/fruta.component';

export const appRoutes: Routes = [
  {path:'',component:EmpleadosComponent},//este es home
  {path:'empleado',component:EmpleadosComponent},//ruta de empleado
  {path:'fruta',component:FrutaComponent},//ruta de fruta 
  {path:'**',component:EmpleadosComponent}//esta es la pagina cuando se produce un error
];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes); 
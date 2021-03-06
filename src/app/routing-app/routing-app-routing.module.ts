import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadosComponent } from '../empleados/empleados.component';
import { FrutaComponent } from '../fruta/fruta.component';
import { HomeComponent } from '../home/home.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { CochesComponent } from '../coches/coches.component';

export const appRoutes: Routes = [
  {path:'',component:HomeComponent},//este es home
  {path:'pagina-principal',component:HomeComponent},//ruta de pagina principal
  {path:'fruta',component:FrutaComponent},//ruta de fruta 
  {path:'empleado',component:EmpleadosComponent},//ruta de empleado
  {path:'contacto',component:ContactoComponent},//ruta de contacto  
  {path:'contacto/:page',component:ContactoComponent},//ruta de contacto que recibe un parametro 
  {path:'coches',component:CochesComponent},//ruta para pagina de coches
  {path:'**',component:HomeComponent}//esta es la pagina cuando se produce un error
];
 
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes); 
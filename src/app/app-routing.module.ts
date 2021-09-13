import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
{ path: 'registro', loadChildren: () => import('./auth/registro/registro.module').then(m => m.RegistroModule) },
{ path: 'solicitudes-st', loadChildren: () => import('./recursosCompartidos/paginas/sst/lista-sst/lista-sst.module').then(m => m.ListaSstModule) },
{ path: 'solicitudes-sc', loadChildren: () => import('./recursosCompartidos/paginas/ssc/lista-ssc/lista-ssc.module').then(m => m.ListaSscModule) },
{ path: 'solicitud-sc', loadChildren: () => import('./recursosCompartidos/paginas/ssc/ssc.module').then(m => m.SscModule) },
{ path: 'solicitud-st', loadChildren: () => import('./recursosCompartidos/paginas/sst/sst.module').then(m => m.SstModule) },
{ path: 'departamento', loadChildren: () => import('./auth/registro/departamento/departamento.module').then(m => m.DepartamentoModule) },
{ path: 'home', loadChildren: () => import('./recursosCompartidos/paginas/home/home.module').then(m => m.HomeModule) },
{ path: 'pds', loadChildren: () => import('./recursosCompartidos/paginas/pruebadeservicios/pruebadeservicios.module').then(m => m.PruebadeserviciosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

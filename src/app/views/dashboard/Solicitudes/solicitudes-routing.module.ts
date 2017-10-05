import { SectionSolicitudesComponent } from './section-solicitudes/section-solicitudes.component';
import { VerSolicitudesComponent } from './ver-solicitudes/ver-solicitudes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAppComponent } from './view.component';
import { CrearSolicitudesComponent } from 'app/views/dashboard/Solicitudes/crear-solicitudes/crear-solicitudes.component';

const routes: Routes = [
  {
    path: 'view',
    component: ViewAppComponent,
    data: {
      title: 'Solicitudes'
    },
  }, {
    path: 'view/:id',
    component: SectionSolicitudesComponent,
  }, {
    path: 'create',
    component: CrearSolicitudesComponent,
    data: {
      title: 'CrearSolicitudess'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

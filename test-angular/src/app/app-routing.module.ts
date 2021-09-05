import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './components/agregar/agregar.component';
import { EditarComponent } from './components/editar/editar.component';
import { PersonasComponent } from './components/personas/personas.component';
import { TablaPersonasComponent } from './components/tabla-personas/tabla-personas.component';

const routes: Routes = [
  { path: 'personas', component: TablaPersonasComponent },
  { path: 'personas/agregar', component: AgregarComponent },
  { path: 'personas/editar/:id', component: EditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

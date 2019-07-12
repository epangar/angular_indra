import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home', 
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule)
  },
  { path: 'tareas', loadChildren: './tareas/tareas.module#TareasModule' },
  { path: 'usuarios', loadChildren: './usuarios/usuarios.module#UsuariosModule' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

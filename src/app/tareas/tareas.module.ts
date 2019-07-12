import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { ItemTareaComponent } from './item-tarea/item-tarea.component';


@NgModule({
  declarations: [TareasComponent, NuevaTareaComponent, ItemTareaComponent],
  imports: [
    CommonModule,
    FormsModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }

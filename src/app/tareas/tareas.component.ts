import { Component, OnInit } from '@angular/core';
import { TareaModel } from '../models/tarea.model';

@Component({
  selector: 'ind-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  aTareas: Array<TareaModel>

  constructor() { }

  ngOnInit() {
    this.aTareas = []
  }

  onNuevaTarea(ev: TareaModel) {
    this.aTareas.push(ev)
    console.log(this.aTareas)
  }

  onBorrarTarea(i: number) {
    this.aTareas.splice(i, 1)
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.model';

@Component({
  selector: 'ind-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {
  tarea: TareaModel;
  @Output() nuevaTarea: EventEmitter<TareaModel>

  constructor() { 
    this.nuevaTarea = new EventEmitter()
  }

  ngOnInit() {
    this.tarea = new TareaModel()
  }

  onClick(ev: Event) {
    this.nuevaTarea.next(this.tarea)
    this.tarea = new TareaModel()
  }

}

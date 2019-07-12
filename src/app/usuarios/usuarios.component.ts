import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'ind-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  aUsuarios: Array<any>

  constructor(public usersService: UsersService) { }

  ngOnInit() {
    this.aUsuarios = []
  }

  async onClick(ev: Event) {
    this.aUsuarios = await this.usersService.getUsers() as Array<any>
  }

}

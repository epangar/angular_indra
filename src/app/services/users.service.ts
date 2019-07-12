import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string;

  constructor(public http: HttpClient) {
    this.url = environment.urlUsers
   }

   getUsers() {
     return this.http.get(this.url).toPromise()
   }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(pageNumber: number): Observable<User[]> {
    pageNumber++;
    const url = 'https://reqres.in/api/users?page=' + pageNumber;
    return this.http.get<User[]>(url);
    // TODO: CZY TU POWINNO BYC: Users[]?
  }

  getUser(userId: number): Observable<User> {
    const url = 'https://reqres.in/api/users/' + userId;
    return this.http.get<User>(url);
  }
}

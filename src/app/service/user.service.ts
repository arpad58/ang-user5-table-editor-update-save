import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /* table */
  serverAddress: string = 'http://localhost:3000/users';

              /* table              */
  constructor(private http: HttpClient) { }

  /* table */
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.serverAddress}`);
  }

  /* editor */
  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.serverAddress}/${id}`);
  }

  /* editor create update */
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.serverAddress}`, user);
  }

  /* editor create update */
  updateUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.serverAddress}/${user.id}`, user);
  }

}

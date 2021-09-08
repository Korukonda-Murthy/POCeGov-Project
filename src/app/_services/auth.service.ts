import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/Operators";
import { Userlogin } from '../models/userlogin.model';

const AUTH_API = ' http://127.0.0.1:8888/api/registration';
const REG_API = ' http://127.0.0.1:8888/api/vehicleRegistration';
//const REG_API = 'http://localhost:3000/posts';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /* login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    });
  } */

  /* register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    });
  } */
  userRegister(data: any): Observable<any>{
    return this.http.post<any>(AUTH_API, data);
  }
  getAll(): Observable<Userlogin[]> {
    return this.http.get<Userlogin[]>(AUTH_API);
  }
  vehicleRegistration(data: any): Observable<any>{
    return this.http.post<any>(REG_API, data);
  }
}

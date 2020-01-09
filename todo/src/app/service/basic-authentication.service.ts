import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { API_URL } from '../app.constants';

export const TOKEN='token';
export const AUTHENTICATED_USER='authenticatedUser';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private httpclient: HttpClient
  ) { }

  getAuthenticatedUser(){
    let user=sessionStorage.getItem(AUTHENTICATED_USER);
    return user;
  }
  getAuthenticatedToken(){
    let token=sessionStorage.getItem(TOKEN);
    return token;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }

  executeAuthenticationService(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({ Authorization: basicAuthHeaderString });

    return this.httpclient.get<AuthenticationBean>(`${API_URL}/basicauth`, 
    { headers }).pipe(
      map(
        data=>{
          sessionStorage.setItem('authenticatedUser',username);
          sessionStorage.setItem(TOKEN,basicAuthHeaderString);
          return data;
        }
      )
    );

  }


  executeJWTAuthenticationService(username, password) {

    return this.httpclient.post<any>(`${API_URL}/authenticate`, 
    { username,
      password 
    }).pipe(
      map(
        data=>{
          sessionStorage.setItem('authenticatedUser',username);
          sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
          return data;
        }
      )
    );

  }
}

export class AuthenticationBean {
  constructor(public message: string) { }
}

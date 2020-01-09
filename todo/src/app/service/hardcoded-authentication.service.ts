import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log('before' + this.isUserLoggedIn());
    if (username == "mayank" && password === 'password') {
      sessionStorage.setItem('authenticatedUser', "mayank");
      console.log('after' + this.isUserLoggedIn());
      return true;
    }
    else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}

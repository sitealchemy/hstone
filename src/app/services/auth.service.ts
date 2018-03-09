import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  login(username: string, password: string) {
    if (username === 'waldemar' && password === '3aB8Cd72') {
      return { username: 'waldemar' };
    } else {
      return false;
    }
  }

  logout() {
    sessionStorage.removeItem('currentUser');
  }

}

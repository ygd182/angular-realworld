import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  constructor(private apiService: ApiService) { }

  login (userData: any) {
    const body = {
      "user": userData
    };
    return this.apiService.post('users/login', body);
  }

  registerUser(data: any) {
    const body = {
      "user": data
    };
    return this.apiService.post('users', body);
  }

  saveCurrentUserSession(user: User) {
    this.setCurrentUserToken(user.token);
    this.isLoggedInSubject.next(true);
  }

  logout() {
    this.removeToken();
    this.isLoggedInSubject.next(false);
  }

  getCurrentUserToken() {
    return window.localStorage.getItem('token');
  }

  private setCurrentUserToken(token: string) {
    window.localStorage.setItem('token', token);
  }

  private removeToken() {
    window.localStorage.removeItem('jwtToken');
  }

}

export interface User {
  "email": "string",
  "token": "string",
  "username": "string",
  "bio": "string",
  "image": "string"
}

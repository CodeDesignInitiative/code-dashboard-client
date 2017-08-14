import {User} from '../models/user';

export class AccountService {

  private user: User;

  constructor() {
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem('token') != null;
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.user = null;
  }

  public getUser(): User | null {
    return this.user;
  }

  public setUser(user: User) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }
}

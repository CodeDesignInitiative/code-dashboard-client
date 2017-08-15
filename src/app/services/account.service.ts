import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';
import {ApiService} from './api.service';

export class AccountService {

  private user: User;
  public register = this.apiService.register;

  constructor(public apiService: ApiService) {
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  }

  /***
   * Returns whether the user is currently logged in and has a valid AuthToken
   * @returns {boolean}
   */
  public isAuthenticated(): boolean {
    return localStorage.getItem('token') != null;
  }

  /***
   * Returns the current user's profile data object
   * @returns {User}
   */
  public getUser(): User | null {
    return this.user;
  }

  /***
   * Locally applies changes to the user's profile data
   * To make the changes permanent use [applyProfileChanges()]{@link applyProfileChanges}
   * @param {User} user
   */
  public setUser(user: User) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  /***
   * Makes changes to the local user profile permanent on the server
   * @returns {Observable<Response>}
   */
  public applyProfileChanges(): Observable<Response> {
    return this.apiService.updateProfile(this.user);
  }

  /***
   * Logs the user out and removes local caches
   */
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.user = null;
  }

  /***
   * Logs the user in and requests the user's profile data
   * @param {String} email
   * @param {String} password
   * @returns {Observable<User>}
   */
  public login(email: String, password: String): Observable<User> {
    return this.apiService.login(email, password).flatMap(res => {
      localStorage.setItem('token', res.token);
      return this.apiService.getOwnProfile();
    }).map(res => {
      this.setUser(res);
      return res;
    });
  }
}

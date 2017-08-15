import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {AccountService} from './account.service';
import {User} from '../models/user';
import {AuthResponse} from '../models/auth';

const apiUrl = environment.server_url + '/api/' + environment.api_version;

@Injectable()
export class ApiService {

  constructor(private authHttp: AuthHttp, private http: Http, private accountService: AccountService) {
  }

  /***
   * Registers a new user
   * @param {String} email
   * @param {String} password
   * @returns {Observable<Object>}
   */
  public register(email: String, password: String): Observable<Response> {
    return this.http.post(environment.server_url + '/register', {
      email: email,
      password: password,
      name: name
    }).map(res => res.json());
  }

  /***
   * Logs the user in and saves the new auth token in the AccountService automatically authenticating all following requests
   * @param {String} email
   * @param {String} password
   * @returns {Observable<Object>}
   */
  public login(email: String, password: String): Observable<AuthResponse> {
    return this.http.post(environment.server_url + '/login', {
      username: email,
      password: password,
    }).map(res => res.json());
  }

  /***
   * Returns the own user profile data
   * @returns {Observable<User>}
   */
  public getOwnProfile(): Observable<User> {
    return this.authHttp.get(apiUrl + '/user', {}).map(res => res.json());
  }

  /***
   * Update the own user profile
   * @param {User} user The updated user model
   * @returns {Observable<Response>}
   */
  public updateProfile(user: User): Observable<Response> {
    return this.authHttp.put(apiUrl + '/user', user).map(res => res.json());
  }

  /***
   * Deletes the own user profile
   * @returns {Observable<Response>}
   */
  public deleteProfile(): Observable<Response> {
    return this.authHttp.delete(apiUrl + '/user').map(res => res.json());
  }
}

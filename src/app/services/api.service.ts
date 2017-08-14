import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {AccountService} from './account.service';
import {User} from '../models/user';

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
  public register(email: String, password: String): Observable<Object> {
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
  public login(email: String, password: String): Observable<Object> {
    return this.http.post(environment.server_url + '/login', {
      username: email,
      password: password,
    }).map(res => res.json()).map(res => {
      this.accountService.setUser(new User(email, res.token, false));
      localStorage.setItem('token', res.token);
      return res;
    }).map(res => res.json());
  }

  /***
   *
   * @returns {Observable<User>}
   */
  public getOwnUser(): Observable<Response> {
    return this.authHttp.get(apiUrl + '/user', {}).map(res => res.json());
  }
}

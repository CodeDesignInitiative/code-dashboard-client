import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AccountService} from '../services/account.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private accountService: AccountService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.accountService.isAuthenticated();
  }
}

@Injectable()
export class UnauthedGuard implements CanActivate {

  constructor(private accountService: AccountService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return !this.accountService.isAuthenticated();
  }
}

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private accountService: AccountService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return !this.accountService.getUser().admin;
  }
}

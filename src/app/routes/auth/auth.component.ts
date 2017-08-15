import {Component} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {

  isLoading = false;
  loginData = {
    email: '',
    password: ''
  };

  constructor(private accountService: AccountService, public snackBar: MdSnackBar) {
  }

  onRegister() {
    this.isLoading = true;
    this.accountService.register(this.loginData.email, this.loginData.password).subscribe(() => {
      this.isLoading = false;
      // TODO registration successful
    }, error => {
      if (error.status !== 400) {
        this.snackBar.open('An unknown error has occurred', 'Close');
      } else {
        this.snackBar.open(JSON.parse(error._body).message, 'Close');
      }
      this.isLoading = false;
    });
  }

  onLogin() {
    this.isLoading = true;
    this.accountService.login(this.loginData.email, this.loginData.password).subscribe(() => {
      this.isLoading = false;
    }, error => {
      if (error.status !== 400) {
        this.snackBar.open('An unknown error has occurred', 'Close');
      } else {
        this.snackBar.open(JSON.parse(error._body).message, 'Close');
      }
      this.isLoading = false;
    });
  }

}

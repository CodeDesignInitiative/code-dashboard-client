import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {MdSnackBar} from '@angular/material';

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

  constructor(private apiService: ApiService, public snackBar: MdSnackBar) {
  }

  onRegister() {
    this.isLoading = true;
    this.apiService.register(this.loginData.email, this.loginData.password).subscribe(() => {
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

  onLogin() {
    this.isLoading = true;
    this.apiService.login(this.loginData.email, this.loginData.password).subscribe(() => {
      this.apiService.getOwnUser().subscribe(data => {
        console.log(data);
      });
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

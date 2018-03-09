import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public login: string;
  public password: string;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastsManager, vcr: ViewContainerRef) {
    this.login = "";
    this.password = "";
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  logIn() {
    const auth = this.authService.login(this.login, this.password);
    if (auth) {
      sessionStorage.setItem('currentUser', JSON.stringify(auth));
      this.router.navigate(['/']);
    } else {
      this.toastr.error('credentials incorrect');
    }
  }

}

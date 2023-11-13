import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  errMsg?: string

  constructor(private authService: AuthService, private router: Router) {

  }

  onSubmitSignIn(form: NgForm){
    if (form.valid) {
      const { username, password, keepConnexion } = form.value
      this.authService
        .signIn(username, password, keepConnexion)
        .then(() => {
          this.router.navigateByUrl('/users')
        })
        .catch(() => {
          this.errMsg = 'Les identifiants sont incorrects'
        })
    }
  }

}

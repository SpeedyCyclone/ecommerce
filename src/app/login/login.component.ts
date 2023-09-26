import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {
  Auth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  login: any;
  constructor(private auth: Auth, private Router: Router) {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.Router.navigate(['']);
      } else {
        this.Router.navigate(['/login']);
      }
    });
  }

  async emailLogin(email: string, password: string): Promise<any> {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  onLogin() {
    const { email, password } = this.login.value;
    this.emailLogin(email, password)
      .then(() => this.Router.navigate(['']))
      .catch(function (error) {
        var errorCode = error.code;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert('Invalid email or password');
        }
        console.log(error);
      });
  }

  async ngOnInit() {
    const result = await getRedirectResult(this.auth);
    const user = result?.user;
    if (user) {
      this.Router.navigate(['/']);
    }
  }
}

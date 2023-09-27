import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signup: any;
  constructor(private auth: Auth, private Router: Router) {
    this.signup = new FormGroup({
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
        this.Router.navigate(['/signup']);
      }
    });
  }

  async emailLogin(email: string, password: string): Promise<any> {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  onSubmit() {
    const { email, password } = this.signup.value;
    this.emailLogin(email, password)
      .then((user) => {
        console.log(user);
        this.Router.navigate(['/login']);
      })
      .catch(function (error) {
        var errorCode = error.code;
        if (errorCode === 'auth/invalid-email') {
          alert('Invalid Email');
        }
        if (errorCode === 'auth/email-already-in-use') {
          alert('Email already in use');
        }
        console.log(error);
      });
  }
}

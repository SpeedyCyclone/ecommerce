import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '';
  text = '';
  link = '';
  constructor(public auth: Auth) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.text = 'Profile';
        this.link = 'profile';
      } else {
        this.text = 'Sign Up';
        this.link = 'signup';
      }
    });
  }
}

import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private auth: Auth, private Router: Router) {}
  getUser() {
    return this.auth.currentUser;
  }
  data1 = this.getUser();

  logout() {
    this.auth.signOut().then(() => {
      this.Router.navigate(['']);
    });
  }
}

import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { TuiBrightness } from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '';
  text = '';
  link = '';
  light = true;
  mode: TuiBrightness = 'onDark';
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

  switchTheme(): void {
    this.mode = this.mode === 'onDark' ? 'onLight' : 'onDark';
    this.light = !this.light;
  }
}

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'Presentateurs', url: '/presentateurs', icon: 'mic' },
    { title: 'Sessions', url: '/sessions', icon: 'paper-plane' },

  ];
  constructor() {}
}

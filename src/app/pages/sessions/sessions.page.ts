import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Session } from 'src/app/models/session';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.page.html',
  styleUrls: ['./sessions.page.scss'],
})
export class SessionsPage implements OnInit {

  pageTitle = 'Sessions';
  sessions: Session[] = [];

  constructor(
    private _sessionService: SessionService, 
    private _loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
    this.loadSessions();
    
  }

  async loadSessions() {
    const loading = await this._loadingCtrl.create({
      message:'chargement...',
      spinner: 'bubbles'
    })

    await loading.present();
    this._sessionService.getAllSessions().subscribe(data =>{
      loading.dismiss();
      this.sessions = Object.values(data);
      console.log(this.sessions);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Session } from 'src/app/models/session';
import { PresentateurService } from 'src/app/services/presentateur.service';
import { SessionService } from 'src/app/services/session.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sessions-details',
  templateUrl: './sessions-details.page.html',
  styleUrls: ['./sessions-details.page.scss'],
})
export class SessionsDetailsPage implements OnInit {
  baseUrl = environment.imageUrl;
  pageTitle = 'Session Details';
  id!: number;
  session!: Session;

  constructor(
    private _presentateurService: PresentateurService,
    private _sessionService: SessionService,
    private _loadingCtrl: LoadingController,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadingSessionsDetails()
  }

  async loadingSessionsDetails(){
    this._route.params.subscribe(params => {
      this.id = params['id'];
    })

    const loading = await this._loadingCtrl.create({
      message: 'chargement...',
      spinner: 'circles'
    })
    await loading.present();
    this._sessionService.getAllSessions()
    .subscribe(
      data => {
        if (data.hasOwnProperty(this.id)) {
          this.session = data[this.id];
          console.log("information ", this.session);
          loading.dismiss()
        }
      }
    )
  }

}

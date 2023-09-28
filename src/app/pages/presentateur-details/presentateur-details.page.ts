import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Presentateur } from 'src/app/models/presentateur';
import { Session } from 'src/app/models/session';
import { PresentateurService } from 'src/app/services/presentateur.service';
import { SessionService } from 'src/app/services/session.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-presentateur-details',
  templateUrl: './presentateur-details.page.html',
  styleUrls: ['./presentateur-details.page.scss'],
})
export class PresentateurDetailsPage implements OnInit {
  pageTitle = 'presentateur details';
  id!: number;
  presentateur!: Presentateur;
  baseUrl = environment.imageUrl;
  sessions: Session[] = [];
  constructor(
    private _presentateurService: PresentateurService,
    private _sessionService: SessionService,
    private _loadingCtrl: LoadingController,
    private _route: ActivatedRoute) {}

  ngOnInit() {
    this.loadingPresentateurDetails();
    this.loadingSessionByPresentator();
  }

  

  async loadingPresentateurDetails(){
    // récupérer l'id dans les parametres url
    this._route.params.subscribe(params => {
      this.id = params['id'];
    })

  
    const loading = await this._loadingCtrl.create({
      message: 'chargement...',
      spinner: 'circles'
    })

    await loading.present();
    this._presentateurService.getAllPresentators().subscribe(
      data => {
        if (data.hasOwnProperty(this.id)) {
          this.presentateur = data[this.id];
          console.log("information ", this.presentateur);
          loading.dismiss()
        }
      }
    )
  }

  loadingSessionByPresentator(){
    this._sessionService.getSessionByPresentator(+this.id)
    .subscribe(data => {
      this.sessions = data;
      console.log("sessions", this.sessions);
    })
  }

}

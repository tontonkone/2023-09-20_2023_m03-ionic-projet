import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Presentateur } from 'src/app/models/presentateur';
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
  presentateurs: Presentateur[] = []; 


  constructor(
    private _presentateurService: PresentateurService,
    private _sessionService: SessionService,
    private _loadingCtrl: LoadingController,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadingSessionsDetails();

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
          this.loadingPresentatorBySession();
          loading.dismiss()
        }
      }
    )
  }

  loadingPresentatorBySession(){
    if(this.session && this.session.speakers){
      this.session.speakers.forEach(speakerId =>{
        this._presentateurService.getAllPresentators()
        .subscribe(
          data => {
            console.log(data)
            if (data.hasOwnProperty(speakerId)){
              this.presentateurs.push(data[speakerId]);
              console.log("presentateur",this.presentateurs)
            }
          }
        )
      })
    }
  }


}

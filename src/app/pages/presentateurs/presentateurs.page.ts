import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Presentateur } from 'src/app/models/presentateur';
import { PresentateurService } from 'src/app/services/presentateur.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-presentateurs',
  templateUrl: './presentateurs.page.html',
  styleUrls: ['./presentateurs.page.scss'],
})
export class PresentateursPage implements OnInit {
  baseUrl = environment.imageUrl;

  pageTitle = "Présentateurs";

  presentators : Presentateur[] = [];

  constructor(
    private _presentateurService: PresentateurService,
    private _loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.loadPresentators()
  }
  
  async loadPresentators() {
    const loading = await this._loadingCtrl.create({
      message: 'chargement...',
      spinner: 'bubbles'
    })

    await loading.present();
    this._presentateurService.getAllPresentators().subscribe(
      data => {
        loading.dismiss()
        this.presentators = Object.values(data);
        console.log(data);
      }
    )
  }



}

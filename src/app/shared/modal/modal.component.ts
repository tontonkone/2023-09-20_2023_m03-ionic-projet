import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Preferences, SetOptions,GetOptions,RemoveOptions, KeysResult } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  message = '';
  name!: string ;

  constructor(){}

  ngOnInit(): void {

    if (Capacitor) {
      const options: GetOptions = {
        key: 'userNote',
      };

      Preferences.get(options)
        .then((result) => {
          if (result && result.value) {
            this.name = result.value;
            this.message = result.value;
          }
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération des préférences :', error);
        });
    }
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
  
    if (Capacitor) {
      console.log(this.name)
      // Utilisez le module @capacitor/preferences pour stocker la note
      const options: SetOptions = {
        key: 'userNote',
        value: this.name,
      };

      Preferences.set(options)
        .then(() => {
          this.modal.dismiss(this.name, 'confirm');
        })
        .catch((error) => {
          console.error('Erreur lors de l\'enregistrement des préférences :', error);
        });
    }
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `${ev.detail.data}!`;
    }
  }
}

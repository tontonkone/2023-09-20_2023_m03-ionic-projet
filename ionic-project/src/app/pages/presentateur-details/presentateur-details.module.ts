import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentateurDetailsPageRoutingModule } from './presentateur-details-routing.module';

import { PresentateurDetailsPage } from './presentateur-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentateurDetailsPageRoutingModule
  ],
  declarations: [PresentateurDetailsPage]
})
export class PresentateurDetailsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentateurDetailsPageRoutingModule } from './presentateur-details-routing.module';

import { PresentateurDetailsPage } from './presentateur-details.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentateurDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [PresentateurDetailsPage]
})
export class PresentateurDetailsPageModule {}

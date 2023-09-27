import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentateursPageRoutingModule } from './presentateurs-routing.module';

import { PresentateursPage } from './presentateurs.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentateursPageRoutingModule,
    SharedModule
  ],
  declarations: [PresentateursPage]
})
export class PresentateursPageModule {}

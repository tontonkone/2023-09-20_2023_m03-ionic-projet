import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionsDetailsPageRoutingModule } from './sessions-details-routing.module';

import { SessionsDetailsPage } from './sessions-details.page';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionsDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [SessionsDetailsPage]
})
export class SessionsDetailsPageModule {}

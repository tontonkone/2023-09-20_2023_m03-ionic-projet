import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionsDetailsPageRoutingModule } from './sessions-details-routing.module';

import { SessionsDetailsPage } from './sessions-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionsDetailsPageRoutingModule
  ],
  declarations: [SessionsDetailsPage]
})
export class SessionsDetailsPageModule {}

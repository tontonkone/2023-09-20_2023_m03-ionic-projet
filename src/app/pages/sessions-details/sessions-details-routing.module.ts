import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionsDetailsPage } from './sessions-details.page';

const routes: Routes = [
  {
    path: '',
    component: SessionsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionsDetailsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentateurDetailsPage } from './presentateur-details.page';

const routes: Routes = [
  {
    path: '',
    component: PresentateurDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentateurDetailsPageRoutingModule {}

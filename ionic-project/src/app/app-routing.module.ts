import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sessions',
    loadChildren: () => import('./pages/sessions/sessions.module').then( m => m.SessionsPageModule)
  },
  {
    path: 'sessions/:id',
    loadChildren: () => import('./pages/sessions-details/sessions-details.module').then( m => m.SessionsDetailsPageModule)
  },
  {
    path: 'presentateurs',
    loadChildren: () => import('./pages/presentateurs/presentateurs.module').then( m => m.PresentateursPageModule)
  },
  {
    path: 'presentateur/:id',
    loadChildren: () => import('./pages/presentateur-details/presentateur-details.module').then( m => m.PresentateurDetailsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

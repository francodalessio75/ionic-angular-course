import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/routes').then( 
      m => m.RECIPES_ROUTES)
  },
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  }
];

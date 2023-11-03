import { Routes } from "@angular/router";
import { PlacesPage } from "./places.page";

export const PLACES_ROUTES: Routes = [
    {
        path: 'tabs',
        component:PlacesPage,
        loadChildren: () => import('./tabs-routes').then(m => m.TABS_ROUTES)
    },
    {
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full'
      }
]
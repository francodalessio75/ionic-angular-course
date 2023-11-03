import { Routes } from "@angular/router";

export const TABS_ROUTES: Routes = [
    {
        path:'discover',
        loadChildren: () => import( './discover/discover-routes').then( m => m.DISCOVER_ROUTES )
    },
    {
        path:'offers',
        loadChildren: () => import('./offers/offers-routes').then( m => m.OFFERS_ROUTES )
    },
    {
        path:'',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full'
    },
];
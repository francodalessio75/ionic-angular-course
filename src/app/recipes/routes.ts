import { Route } from "@angular/router";
import { RecipesPage } from "./recipes.page";

export const RECIPES_ROUTES: Route[] = [
    {
        path:'',
        component: RecipesPage
    },
    {
        path:':recipeId',
        loadComponent: () => import('./recipe-detail/recipe-detail.page').then( m => m.RecipeDetailPage)
    }
];
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Observable, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/800px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/800px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  getRecipes(): Observable<Recipe[]> {
    return of(this.recipes).pipe(
      shareReplay()
    );
  }

  getRecipe(recipeId: string): Observable<Recipe> {
    const filteredrRecipe = this.recipes.find( recipe => { return recipeId === recipe.id }  );
    return of(filteredrRecipe) as Observable<Recipe>;
  }

}

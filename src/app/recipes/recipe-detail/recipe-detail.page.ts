import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RecipeDetailPage {
  recipe$:Observable<Recipe> = new Observable<Recipe>;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private recipesService:RecipesService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      if(!param.has('recipeId')){
        return
      }
      const recipeId = param.get('recipeId') as string;
      this.recipe$ = this.recipesService.getRecipe(recipeId);
    })
  }

}

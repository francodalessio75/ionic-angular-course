import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RecipesPage {
  
  recipes$ : Observable<Recipe[]>;

  constructor(private recipesService: RecipesService) { 
    this.recipes$ = this.recipesService.getRecipes();
  }

}

import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a description',
      'https://content-praleska-eu.azureedge.net/content/blog/recipes/2023/4/25/my-cinnabon-recipe/Buns-on-a-wooden-table.webp'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is a description',
      'https://content-praleska-eu.azureedge.net/content/blog/recipes/2023/4/25/my-cinnabon-recipe/Buns-on-a-wooden-table.webp'
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //returns a copy of the array
  }
}

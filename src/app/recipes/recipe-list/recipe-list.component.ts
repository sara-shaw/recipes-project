import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

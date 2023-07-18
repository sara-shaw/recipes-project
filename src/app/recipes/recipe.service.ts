import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a description',
      'https://content-praleska-eu.azureedge.net/content/blog/recipes/2023/4/25/my-cinnabon-recipe/Buns-on-a-wooden-table.webp',
      [new Ingredient('Flour', 1), new Ingredient('Eggs', 3)]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is a description',
      'https://content-praleska-eu.azureedge.net/content/blog/recipes/2023/4/25/my-cinnabon-recipe/Buns-on-a-wooden-table.webp',
      [new Ingredient('Sugar', 1), new Ingredient('Milk', 3)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //returns a copy of the array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

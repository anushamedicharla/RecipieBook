import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipesCHanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'test desc',
        // tslint:disable-next-line:max-line-length
        'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis',
        [
            new Ingredient('Meat', 2),
            new Ingredient('fries', 20)
        ])
        , new Recipe('Another Test Recipe', 'Another Test Desc', '',
                        [new Ingredient('meat', 5)])
      ];

    constructor( private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe( index: number) {
        return this.recipes[index];
    }

    addIngredientsToShopList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(newRecipe: Recipe) {
        this.recipes.push(newRecipe);
        this.recipesCHanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesCHanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesCHanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesCHanged.next(this.recipes.slice());
    }
}

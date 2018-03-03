import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();
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
}

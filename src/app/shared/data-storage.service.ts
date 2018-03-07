import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private recipeService: RecipeService) {}

    storeRecipes() {
        // Overwrite old data
        return this.http.put('https://recipebook-65354.firebaseio.com/recipes.json',
                        this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get('https://recipebook-65354.firebaseio.com/recipes.json')
        .subscribe(
            (res: Response) => {
                const recipes: Recipe[] = res.json();
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}

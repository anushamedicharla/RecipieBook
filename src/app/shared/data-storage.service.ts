import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
                private recipeService: RecipeService,
                private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();
        // Overwrite old data
        return this.http.put('https://recipebook-65354.firebaseio.com/recipes.json?auth=' + token,
                        this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        this.http.get('https://recipebook-65354.firebaseio.com/recipes.json?auth=' + token)
        .subscribe(
            (res: Response) => {
                const recipes: Recipe[] = res.json();
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}

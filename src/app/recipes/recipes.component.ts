import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // private recipeSelected: Recipe;
  constructor( ) { }

  ngOnInit() {
    // this.recpService.recipeSelected.subscribe( (recipe: Recipe) => {
    //   this.recipeSelected = recipe;
    // });
  }

}

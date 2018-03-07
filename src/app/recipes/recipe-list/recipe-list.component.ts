import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor( private recpService: RecipeService,
               private router: Router,
               private route: ActivatedRoute ) { }

  ngOnInit() {
    this.subscription = this.recpService.recipesCHanged
        .subscribe(
          (recipes: Recipe[]) => {
            this.recipes = recipes;
          }
        );

    this.recipes = this.recpService.getRecipes();
  }

  onNewRecipe() {
    // Since we are already on recipes path
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

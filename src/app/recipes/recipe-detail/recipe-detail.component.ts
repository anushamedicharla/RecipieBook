import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipeItem: Recipe;
  recipeItem: Recipe;
  id: number;
  constructor( private recipeService: RecipeService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe( (params: Params) => {
      this.id = +params['id'];
      this.recipeItem = this.recipeService.getRecipe(this.id);
    });
  }

  sendToShoppingList() {
    this.recipeService.addIngredientsToShopList(this.recipeItem.ingredients);
  }

  onEditRecipe() {
    // path with current id/edit
    this.router.navigate(['edit'], {relativeTo: this.route});

    // Or we could pass going up one level and passing the current id
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}

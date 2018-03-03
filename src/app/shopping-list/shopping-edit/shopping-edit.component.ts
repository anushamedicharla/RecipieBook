import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientQuantity: ElementRef;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd() {
    const ingredient = new Ingredient(this.ingredientName.nativeElement.value, this.ingredientQuantity.nativeElement.value);
    this.slService.addIngredient(ingredient);
  }

}

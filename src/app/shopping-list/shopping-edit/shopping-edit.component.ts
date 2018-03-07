import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') ingredientName: ElementRef;
  // @ViewChild('amountInput') ingredientQuantity: ElementRef;
  @ViewChild('frm') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editIndex: number;
  editItem: Ingredient;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
        (index: number) => {
          this.editMode = true;
          this.editIndex = index;
          this.editItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            'name': this.editItem.name,
            'amount': this.editItem.amount
          });
        }
    );
  }

  onAdd(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if ( this.editMode ) {
      this.slService.updateIngredient(this.editIndex, ingredient);
    } else {
      this.slService.addIngredient(ingredient);
    }

    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

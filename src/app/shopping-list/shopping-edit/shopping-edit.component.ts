import {Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addedShoppingListItem = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  add(name, amount) {
    this.addedShoppingListItem.emit(new Ingredient(name.value, amount.value));
  }
}

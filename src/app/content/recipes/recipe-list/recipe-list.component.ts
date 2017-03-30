import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'http://www.cryingoverspiltmilk.co.nz/wp-content/uploads/2015/03/pixabay/b/recipe_1426460443.png'),
    new Recipe('A test recipe', 'This is simply a test', 'http://www.cryingoverspiltmilk.co.nz/wp-content/uploads/2015/03/pixabay/b/recipe_1426460443.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}

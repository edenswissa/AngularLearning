import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Test recipe','testing','http://www.10dakot.co.il/wp-content/uploads/2015/07/DSC_0162-%D7%A2%D7%95%D7%AA%D7%A7.jpg'),
    new Recipe('test2','test2','http://img.wcdn.co.il/f_auto,t_18/2/5/0/2/2502779-46.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}

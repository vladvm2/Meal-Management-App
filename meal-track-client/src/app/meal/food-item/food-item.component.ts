import { Component, OnInit, Input } from '@angular/core';
import { Food } from '@app/core';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  @Input() food: Food;
  constructor() { }

  ngOnInit(): void {
  }

}

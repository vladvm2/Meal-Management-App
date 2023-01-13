import { Meal } from './meal.model';
import { FoodPortion } from './food-portion.model';

export class ProcessedMeal implements Meal {
    id: string;
    title: string;
    foodPortions: FoodPortion[];
    calories: number;

    constructor(id: string, title: string, foodPortions: FoodPortion[], calories: number) {
        this.id = id;
        this.title = title;
        this.foodPortions = foodPortions;
        this.calories = calories;
    }

    getCalories() {
        const value = this.foodPortions.reduce((acc, curr) => acc + (curr.quantity * curr.food.calories) / 100, 0).toFixed(0);
        this.calories = Number(value);
        return this.calories;
    }
}
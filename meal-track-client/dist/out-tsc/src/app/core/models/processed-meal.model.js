export class ProcessedMeal {
    constructor(id, title, foodPortions, calories) {
        this.id = id;
        this.title = title;
        this.foodPortions = foodPortions;
        this.calories = calories;
    }
    getCalories() {
        const value = this.foodPortions.reduce((acc, curr) => acc + (curr.quantity * curr.food.calories) / 100, 0).toFixed(2);
        this.calories = Number(value);
        return this.calories;
    }
}
//# sourceMappingURL=processed-meal.model.js.map
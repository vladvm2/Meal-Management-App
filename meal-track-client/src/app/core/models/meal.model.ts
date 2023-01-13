import { FoodPortion } from '..';

export interface Meal {
    id: string;
    title: string;
    foodPortions: FoodPortion[];
    calories:number;
}
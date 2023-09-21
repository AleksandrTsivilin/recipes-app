import { AreaMeal } from "./areaMeal";
import { CategoryMeal } from "./categoryMeal";
import { IngredientMeal } from "./ingredientMeal";

export interface MealInfo {
    id: number;
    title: string;
    category: CategoryMeal;
    area: AreaMeal;
    instructions: string;
    mealThumb: string;
    mealTags: string[];
    ingredients: IngredientMeal []
    rating?: number | null
}
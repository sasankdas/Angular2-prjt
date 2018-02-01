import {Recipe} from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{
recipeSelected = new EventEmitter<Recipe>();

  private  recipes: Recipe[] = [

        new Recipe("Malai Koftha", "Best Malai Koftha ever", "http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg",[new Ingredient("koftha balls", 10) , new Ingredient("Masalas", 5)]),
        new Recipe("Butter Chicken", "Best Butter Chicken ever", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIoeL-9tIfnLjuFmVWucoiK6u64pXyiDyB4appc2Rva_va-ecJA",[new Ingredient("chicken", 3), new Ingredient("Masalas", 10)]),
        
        ];

getRecipes(){
    return this.recipes.slice();
}

}
import {Recipe} from "./recipe.model";
import {  Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import{ShoppingListService} from "../shopping-list/shopping-list.service"
import { Subject } from "rxjs/Subject";
 @Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();


  private  recipes: Recipe[] = [

        new Recipe("Malai Koftha", "Best Malai Koftha ever", "http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg",[new Ingredient("koftha balls", 10) , new Ingredient("Masalas", 5)]),
        new Recipe("Butter Chicken", "Best Butter Chicken ever", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIoeL-9tIfnLjuFmVWucoiK6u64pXyiDyB4appc2Rva_va-ecJA",[new Ingredient("chicken", 3), new Ingredient("Masalas", 10)]),
        
        ];

        constructor(private slService : ShoppingListService){

        }


setRecipes(recipes:Recipe[]){
this.recipes = recipes;
this.recipesChanged.next(this.recipes.slice());

        }

getRecipes(){
    return this.recipes.slice();
}

getRecipe(index : number) {
    return this.recipes[index];
}

addIngredientsToShoppingList(ingredients:Ingredient[]){
this.slService.addIngredients(ingredients);
}

addRecipe(recipe : Recipe){
this.recipes.push(recipe);
this.recipesChanged.next(this.recipes.slice());
}

updateRecipe(index : number, newRecipe: Recipe){
this.recipes[index] = newRecipe;
this.recipesChanged.next(this.recipes.slice());
}
deleteRecipe(index :number){
    this.recipes.splice(index , 1);
    this.recipesChanged.next(this.recipes.slice());
}

}
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./home/home.component";



const appRoutes : Routes = [
    
    {path : "shopping-list" , component : ShoppingListComponent},
    {path:"recipes", loadChildren:'./recipes/recipes.module#RecipesModule' },
    {path : "" , component : HomeComponent},
    
   ];
@NgModule({
imports : [RouterModule.forRoot(appRoutes)],
exports : [RouterModule],
})
export class AppRoutingModule{

}
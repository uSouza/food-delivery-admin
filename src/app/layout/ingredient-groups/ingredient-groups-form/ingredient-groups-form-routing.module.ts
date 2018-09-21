import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientGroupsFormComponent } from './ingredient-groups-form.component';

const routes: Routes = [
    {
        path: '',
        component: IngredientGroupsFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IngredientGroupsFormRoutingModule {}

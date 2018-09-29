import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'orders', loadChildren: './order-details/order-details.module#OrderDetailsModule' },
            { path: 'ingredient-group', loadChildren: './ingredient-groups/ingredient-groups-form/ingredient-groups-form.module#IngredientGroupsFormModule' },
            { path: 'ingredients', loadChildren: './ingredients/ingredients.module#IngredientsModule' },
            { path: 'additionals', loadChildren: './additionals/additionals.module#AdditionalsModule' },
            { path: 'sizes', loadChildren: './sizes/sizes.module#SizesModule' },
            { path: 'menus-form', loadChildren: './menus/menus-form/menus-form.module#MenusFormModule' },
            { path: 'menus-list', loadChildren: './menus/menus-list/menus-list.module#MenusListModule' },
            { path: 'menus-show', loadChildren: './menus/menus-show/menus-show.module#MenusShowModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

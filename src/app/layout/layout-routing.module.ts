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
            { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsModule' },
            { path: 'additionals', loadChildren: './additionals/additionals.module#AdditionalsModule' },
            { path: 'form-payments', loadChildren: './form-payments/form-payments.module#FormPaymentsModule' },
            { path: 'tags', loadChildren: './tags/tags.module#TagsModule' },
            { path: 'sizes', loadChildren: './sizes/sizes.module#SizesModule' },
            { path: 'menus-form', loadChildren: './menus/menus-form/menus-form.module#MenusFormModule' },
            { path: 'menus-list', loadChildren: './menus/menus-list/menus-list.module#MenusListModule' },
            { path: 'menus-show', loadChildren: './menus/menus-show/menus-show.module#MenusShowModule' },
            { path: 'closed-orders', loadChildren: './closed-orders/closed-orders.module#ClosedOrdersModule' },
            { path: 'restaurants-form', loadChildren: './restaurants/restaurants-form/restaurants-form.module#RestaurantsFormModule' },
            { path: 'restaurants-list', loadChildren: './restaurants/restaurants-list/restaurants-list.module#RestaurantsListModule' },
            { path: 'restaurants-show', loadChildren: './restaurants/restaurants-show/restaurants-show.module#RestaurantsShowModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

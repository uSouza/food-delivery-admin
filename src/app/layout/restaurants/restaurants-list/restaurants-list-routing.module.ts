import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsListComponent } from './restaurants-list.component';

const routes: Routes = [
    {
        path: '',
        component: RestaurantsListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RestaurantsListRoutingModule {}

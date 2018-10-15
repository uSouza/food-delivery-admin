import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsShowComponent } from './restaurants-show.component';

const routes: Routes = [
    {
        path: '',
        component: RestaurantsShowComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RestaurantsShowRoutingModule {}
